/**
 * Draft of a lexer for Kukulu.
 *
 * Code partly based on <https://github.com/SAP/chevrotain/blob/master/examples/lexer/python_indentation/python_indentation.js>
 */

const { createToken, createTokenInstance, Lexer } = require("chevrotain")
const _ = require("lodash")

const tokens = {}

// utility functions

function TOKENS(defs) {
  for (let name in defs) {
    let def= defs[name]
    if (def instanceof RegExp) {
      def = { pattern: def }
    }
    def.name = name
    tokens[name] = createToken(def)
  }
}

function appendEmptyToken(list, token) {
  const lastToken = _.last(list) || { endOffset: 0, endLine: 0, endColumn: 0 }
  const offset    = lastToken.endOffset + 1
  const line      = lastToken.endLine
  const column    = lastToken.endColumn + 1
  list.push(createTokenInstance(token, "", offset, offset, line, line, column, column))
}

// State required for matching the indentations
let indentStack = [0]
let lastOffsetChecked


/**
 *
 * Works like a / +/y regExp.
 *  - Note the usage of the 'y' (sticky) flag.
 *    This can be used to match from a specific offset in the text
 *    in our case from startOffset.
 *
 * The reason this has been implemented "manually" is because the sticky flag is not supported
 * on all modern node.js versions (4.0 specifically).
 */
function matchWhiteSpace(text, startOffset) {
  let result = ""
  let offset = startOffset
  // ignoring tabs in this example
  while (text[offset] === " ") {
    offset++
    result += " "
  }

  if (result === "") {
    return null
  }

  return [result]
}

/**
 * This custom Token matcher uses Lexer context ("matchedTokens" and "groups" arguments)
 * combined with state via closure ("indentStack" and "lastTextMatched") to match indentation.
 *
 * @param {string} text - remaining text to lex, sent by the Chevrotain lexer.
 * @param {IToken[]} matchedTokens - Tokens lexed so far, sent by the Chevrotain Lexer.
 * @param {object} groups - Token groups already lexed, sent by the Chevrotain Lexer.
 * @param {string} type - determines if this function matches Indent or Dedent tokens.
 * @returns {*}
 */
function matchIndentBase(text, offset, matchedTokens, groups, type) {
  
  // indentation can only be matched at the start of a line.
  if (matchedTokens.length) {
    const lastToken = matchedTokens[matchedTokens.length-1]
    if (lastToken.tokenType.tokenName !== "EOL") {
      return null
    }
  }

  let match
  let currIndentLevel = undefined
  const isZeroIndent = text.length < offset && text[offset] !== " "
  if (isZeroIndent) {
    // Matching zero spaces Dedent would not consume any chars, thus it would cause an infinite loop.
    // This check prevents matching a sequence of zero spaces outdents.
    if (lastOffsetChecked !== offset) {
      currIndentLevel = 0
      match = [""]
      lastOffsetChecked = offset
    }
  } else {
    // possible non-empty indentation
    match = matchWhiteSpace(text, offset)
    if (match !== null) {
      currIndentLevel = match[0].length
    }
  }

  // indentation cannot be matched without at least one space character.
  if (currIndentLevel === undefined) {
    return null
  }

  const lastIndentLevel = _.last(indentStack)
  if (currIndentLevel > lastIndentLevel && type === "indent") {
    indentStack.push(currIndentLevel)
    return match
  } else if (
    currIndentLevel < lastIndentLevel &&
    type === "outdent"
  ) {
    // if we need more than one outdent token, add all but the last one
    if (indentStack.length > 2) {
      while (
        indentStack.length > 2 &&
        // stop before the last Dedent
        indentStack[indentStack.length - 2] > currIndentLevel
      ) {
        indentStack.pop()
        appendEmptyToken(matchedTokens, tokens.Dedent) 
      }
    }
    indentStack.pop()
    return match
  } else {
    // same indent, this should be lexed as simple whitespace and ignored
    return null
  }
}

// customize matchIndentBase to create separate functions of Indent and Dedent.
const matchIndent = _.partialRight(matchIndentBase, "indent")
const matchDedent = _.partialRight(matchIndentBase, "outdent")

// FRAGMENTS({ PositiveInteger: '[1-9][0-9]*'})
const URLRegExp = "[a-z]+://[^ \\t<>\"{}|^`\\\\]+" 

TOKENS({

  Comment: {
    pattern: /[ \t]*#.*/,
    group: Lexer.SKIPPED
  },

  EOL: {
    pattern: /(\n|\r\n?|[ \t]*;[ \t]*)+/,
  },

  Indent: {
    pattern: matchIndent,
    line_breaks: false
  },

  Dedent: {
    pattern: matchDedent,
    line_breaks: false
  },

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
  
  // Strings
  QuotedString: /"(:?[^\\"'\n\r]+|\\(:?[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/,
  AnnotationString: /'(:?[^\\"'\n\r]+|\\(:?[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*'/,

  URL: new RegExp(`${URLRegExp}|<${URLRegExp}>`),

  LanguageSet: /@[a-zA-Z]+(-[a-zA-Z0-9]+)*-/,
  LanguageTag: /@[a-zA-Z]+(-[a-zA-Z0-9]+)*/,

  Colon: /:/,
  Comma: /,/,
})


const lexer = new Lexer(_.values(tokens))

function tokenize(input) {

  // reset the indent stack
  indentStack = [0]
  lastOffsetChecked = undefined

  const result = lexer.tokenize(input)

  // add remaining EOL
  const lastToken = result.tokens.slice(-1)[0]
  if (!lastToken || lastToken.tokenType !== tokens.EOL) {
    appendEmptyToken(result.tokens, tokens.EOL)
  }

  // add remaining Dedents
  while (indentStack.length > 1) {
    appendEmptyToken(result.tokens, tokens.Dedent)
    indentStack.pop()
  }

  return result
}

module.exports = {
  tokens,
  tokenize
}
