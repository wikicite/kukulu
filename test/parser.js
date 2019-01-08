const should = require("should")
const glob = require("glob")
const fs = require("fs")
const Parser = require("../lib/parser.js")
const Lexer = require("../lib/lexer.js")

describe("parser", () => {

  let parser = new Parser([])
  let validExamples = glob.sync("examples/*.kkl")
  let invalidExamples = glob.sync("examples/invalid-grammar/*.kkl")

  it("parses examples ("+validExamples.length+")", () => {
    validExamples.forEach(file => {
      let input = fs.readFileSync(file, "utf8")
      let tokens = Lexer.tokenize(input)
      should(tokens.errors).be.empty()
      parser.input = tokens.tokens
      should(parser.Script()).be.ok()
      should(parser.errors).be.empty()
    })
  })

  it("detects invalid scripts ("+invalidExamples.length+")", () => {
    invalidExamples.forEach(file => {
      let input = fs.readFileSync(file, "utf8")
      let tokens = Lexer.tokenize(input)
      should(tokens.errors).be.empty()
      parser.input = tokens.tokens
      parser.Script()
      should(parser.errors).not.be.empty()
    })
  })

})
