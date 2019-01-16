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
const DecimalRegExp = "[+-]?([0-9]*[.])?[0-9]+"
const NumberRegExp = `${DecimalRegExp}([eE][+-]?[0-9]+)?`
const ToleranceRegExp = `~|!|((±|[+]-|[+]/-)${NumberRegExp})|[[]${NumberRegExp},${NumberRegExp}\\]`

const dataTypeNames = [
  "Item","Property","Lexeme","Sense","Form","String","Text","Math","Time","Id","Url",
  "Quantity","Coordinate","Shape","Media","Tabular","Bool","Set","Range","DataType",
  "Entity",
]

function operatorCanFollow(matchedTokens) {
  if (matchedTokens.length) {
    const prev = matchedTokens[matchedTokens.length-1].tokenType
    return prev !== tokens.Indent && prev !== tokens.EOL && prev !== tokens.Dot
  }
}

tokens.add({
  Space: /[ \t]+/,  // is removed later

  // EntityId
  ItemId: /Q[1-9][0-9]*/,
  PropertyId: /P[1-9][0-9]*/,
  SenseId: /L[1-9][0-9]*-S[1-9][0-9]*/,
  FormId: /L[1-9][0-9]*-F[1-9][0-9]*/,
  LexemeId: /L[1-9][0-9]*/,
  UnitId: /U[1-9][0-9]*/,
  
  ReferencePropertyId: /S[1-9][0-9]*/,

  // Keywords
  DataType: new RegExp(dataTypeNames.join("|")),

  // Strings
  QuotedString: /"(:?[^\\"'\n\r]+|\\(:?[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/,
  AnnotationString: /'(:?[^\\"'\n\r]+|\\(:?[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*'/,

  URL: new RegExp(`${URLRegExp}|<${URLRegExp}>`),

  LanguageSet: /@[a-zA-Z]+(-[a-zA-Z0-9]+)*-/,
  LanguageTag: /@[a-zA-Z]+(-[a-zA-Z0-9]+)*/,

  Variable: /\?[?+*]?([a-zA-Z_][a-zA-Z0-9_-]*)?/,

  Coordinate: new RegExp(`${DecimalRegExp}/${DecimalRegExp}`),

  DateValue: /[+-]?[0-9][0-9][0-9][0-9]+(-[0-9]{2}(-[0-9]{2})?)?/,
  TimeValue: /T[0-9]{2}(:[0-9]{2}(:[0-9]{2})?)?(Z|[+-][0-9]{2}(:[0-9]{2})?)?/,
  TimePrecision: /\/([0-9]+|century|decade|year|month|day|hour|minute|second)/,

  QuantityValue: new RegExp(`${NumberRegExp}(${ToleranceRegExp})?`),

  // special values
  True: "True",
  False: "False",
  Novalue: "novalue",
  Somevalue: "somevalue",
  Empty: "Empty",

  An: {
    pattern: (text, offset, matchedTokens) => {
      if (text[offset] !== "a") return null
      if (!operatorCanFollow(matchedTokens)) return null
      return text[offset+1] === "n" ? ["an"] : ["a"]
    },
    line_breaks: false,
    label: "a"
  },

  In: {
    pattern: (text, offset, matchedTokens) => {
      if (text[offset] !== "i" || text[offset+1] !== "n") return null
      return operatorCanFollow(matchedTokens) ? ["in"] : null
    },
    line_breaks: false,
    label: "in"
  },

  // TODO: longer_alt
  If: /if/i,
  Else: /else/i,
  Elsif: /elsif/i,

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

  UnquotedString: /[a-zA-Z].*/, // TODO: allow Unicode letter at start without ' #...' at the end
})

tokens.An.longer_alt = tokens.AttributeName
tokens.In.longer_alt = tokens.AttributeName

const lexer = new Lexer(tokens.values())

function tokenize(input, initialMode) {
  indentHelper.resetStack()
  const result = lexer.tokenize(input, initialMode)
  indentHelper.finish(result)
  return result
}

module.exports = {
  tokens,
  tokenize
}
