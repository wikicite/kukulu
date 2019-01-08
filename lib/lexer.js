/**
 * Draft of a lexer for Kukulu.
 */

const { Lexer } = require("chevrotain")
const TokenTypes = require("./token-types")
const IndentMatcher = require("./indent-matcher")

const tokens = new TokenTypes({
  Comment: {
    pattern: /[ \t]*#.*/,
    group: Lexer.SKIPPED
  },
  EOL: /\n|\r\n?|[ \t]*;[ \t]*/
})

const indentHelper = new IndentMatcher(tokens) // adds token types Indent and Dedent

const URLRegExp = "[a-z]+://[^\\s\\t<>\"{}|^`\\\\]+" 

tokens.add({

  Space: {
    pattern: /[ \t]+/,
    group: Lexer.SKIPPED
  },

  // EntityId
  ItemId: /Q[1-9][0-9]*/,
  PropertyId: /P[1-9][0-9]*/,
  LexemeId: /L[1-9][0-9]*/,
  SenseId: /L[1-9][0-9]*-S[1-9][0-9]*/,
  FormId: /L[1-9][0-9]*-F[1-9][0-9]*/,
  UnitId: /U[1-9][0-9]*/,
  
  ReferencePropertyId: /S[1-9][0-9]*/,

  // Strings
  QuotedString: /"(:?[^\\"'\n\r]+|\\(:?[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/,
  AnnotationString: /'(:?[^\\"'\n\r]+|\\(:?[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*'/,

  URL: new RegExp(`${URLRegExp}|<${URLRegExp}>`),

  LanguageSet: /@[a-zA-Z]+(-[a-zA-Z0-9]+)*-/,
  LanguageTag: /@[a-zA-Z]+(-[a-zA-Z0-9]+)*/,

  Variable: /\?[?+*]?([a-zA-Z_][a-zA-Z0-9_-]*)?/,

  // TODO: Add tolerance
  QuantityValue: /[+-]?([0-9]+|[0-9]*\.[0-9]+)([eE][+-]?[0-9]+)?/,

  // special values
  True: "True",
  False: "False",
  Novalue: "novalue",
  Somevalue: "somevalue",

  AttributeName: /[a-z][A-Za-z]*/,

  // Operators
  Rank: /[~*^]/,
  RegexMatch: "=~",
  RegexNotMatch: "!~",
  Implication: "=>",
  Biconditional: "<=>",
  StrictEqual: "===",
  StrictNotEqual: "!==",
  Equal: "==",
  NotEqual: "!=",
  Not: "!",
  GreaterOrEqual: ">=",
  Greater: ">",
  LessOrEqual: "<=",
  Less: "<",
  AssignmentOperator: ":=",
  Dots: "...",
  Dot: ".",
  SetOr: "|",
  SetAnd: "&",
  Colon: ":",
  Comma: ",",

  UnquotedString: /[a-zA-Z].*/, // TODO: without ' #...' at the end
})

const lexer = new Lexer(tokens.values())

function tokenize(input, initialMode) {
  indentHelper.resetStack()
  const result = lexer.tokenize(input, initialMode)
  indentHelper.finish(result.tokens)
  return result
}

module.exports = {
  tokens,
  tokenize
}
