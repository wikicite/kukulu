const should = require("should")
const { tokens, tokenize } = require("../lib/lexer.js")

const examples = {

  "": [],
  "Q42": ["ItemId"], 
  "Q1 # ...": ["ItemId"],
  "Q1 P2 L3": ["ItemId", "PropertyId", "LexemeId"], 
 
  // ignore comments
  "Q1 # comment\n# comment\nQ2": ["ItemId", "EOL", "EOL", "ItemId"],

  // ignore blank lines and comments in between
  "Q1\n # comment\n\nQ2": ["ItemId", "EOL", "EOL", "ItemId"],

  "Q1\n  P2 Q3": [
    "ItemId", "EOL", 
    "Indent", "PropertyId", "ItemId", "EOL",
    "Dedent"
  ],

  // Semicolon
  "Q1;  Q2": ["ItemId","EOL","ItemId"],
  "Q1:\n  P1;P2": [
    "ItemId", "Colon", "EOL",
    "Indent", "PropertyId", "EOL", "PropertyId", "EOL",
    "Dedent"
  ],
}

describe("lexer", () => {
 
  it("exports tokens", () => {
    should(tokens).have.keys("EOL", "Colon", "ItemId")
  })

  it("can tokenize", () => {
    for(let input in examples) {
      let result = tokenize(input)
      let tokenNames = result.tokens.map(t => t.tokenType.tokenName)
      let expect = examples[input]
      if (expect[expect.length-1] !== "Dedent") expect.push("EOL")
      should(tokenNames).deepEqual(examples[input])
    }
  })
})
