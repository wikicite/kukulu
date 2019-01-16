const should = require("should")
const { tokens, tokenize } = require("../lib/lexer.js")

const examples = {

  "": [],
  "Q42": ["ItemId"], 
  "Q1 # ...": ["ItemId"],
  "Q1 P2 L3": ["ItemId", "PropertyId", "LexemeId"], 
 
  // ignore comments
  "Q1 # comment\n# comment\nQ2": ["ItemId", "EOL", "ItemId"],

  // ignore blank lines and comments in between
  "Q1\n # comment\n\nQ2": ["ItemId", "EOL", "ItemId"],

  // indent
  "Q1\n  P2": [
    "ItemId", "EOL", 
    "Indent", 
    "PropertyId", "EOL", 
    "Dedent",
  ],

  "Q1\n  P1\n  P2": [
    "ItemId", "EOL", 
    "Indent", 
    "PropertyId", "EOL", 
    "PropertyId", "EOL", 
    "Dedent",
  ],

  "Q1\n  P1\n  P2\n    Q2": [
    "ItemId", "EOL", 
    "Indent", 
    "PropertyId", "EOL", 
    "PropertyId", "EOL",
    "Indent",
    "ItemId", "EOL", 
    "Dedent",
    "Dedent",
  ],

  "Q1\n  P2\nQ2": [
    "ItemId", "EOL", 
    "Indent", "PropertyId", "EOL", "Dedent", "EOL", "ItemId"
  ],

  // Semicolon
  "Q1;  Q2": ["ItemId","EOL","ItemId"],
  "Q1:\n  P1;P2": [
    "ItemId", "Colon", "EOL",
    "Indent", 
    "PropertyId", "EOL", 
    "Dedent", "EOL",
    "PropertyId",
  ],

  // operators 'in' and 'an' vs. attribute names
  "Q1 an Item": ["ItemId", "An", "DataType"],
  "Q1\n  alias": ["ItemId", "EOL", "Indent", "AttributeName", "EOL", "Dedent"], 
  "Q1.an": ["ItemId", "Dot", "AttributeName"], 
  "?x in ?y": ["Variable", "In", "Variable"],
  "Q1.in": ["ItemId", "Dot", "AttributeName"],
}

const tokenInstances = {
  QuantityValue: [
    "1", "+42", "-0.1", "1+-0.5", "0.1±0.05", "1[0,2]"
  ]
}

describe("lexer", () => {
 
  it("exports tokens", () => {
    should(tokens).have.keys("EOL", "Colon", "ItemId")
  })

  it("recognizes tokens", () => {
    for(let token in tokenInstances) {
      tokenInstances[token].forEach(input => {
        let result = tokenize(input)
        let tokenNames = result.tokens.map(t => t.tokenType.tokenName)
        should(tokenNames).deepEqual([token])
      })
    }
  })

  it("can tokenize", () => {
    for(let input in examples) {
      let result = tokenize(input)
      let tokenNames = result.tokens.map(t => t.tokenType.tokenName)
      should(tokenNames).deepEqual(examples[input])
    }
  })
})
