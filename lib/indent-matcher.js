const { createToken, createTokenInstance } = require("chevrotain")

const matchWhitespace = new RegExp(" +", "y")

function pushEmptyToken(list, tokenType) {
  const lastToken = list[list.length-1] || { endOffset: 0, endLine: 0, endColumn: 0 }
  const offset    = lastToken.endOffset + 1
  const line      = lastToken.endLine
  const column    = lastToken.endColumn + 1
  list.push(createTokenInstance(tokenType, "", offset, offset, line, line, column, column))
}

/**
 * Utility class to parse indent/detent tokens.
 *
 * Originally based on
 * <https://github.com/SAP/chevrotain/blob/master/examples/lexer/python_indentation/python_indentation.js>
 */
class IndentMatcher {

  constructor(tokenTypes) {
    this.resetStack()
    this.tokenTypes = tokenTypes    

    this.tokenTypes.Indent = createToken({
      name: "Indent",
      pattern: (...args) => this.match("Indent", ...args),
      line_breaks: false
    })

    this.tokenTypes.Dedent = createToken({
      name: "Dedent",
      pattern: (...args) => this.match("Dedent", ...args),
      line_breaks: false
    })
  } 

  resetStack() {
    this.indentStack = [0]
    this.lastOffsetChecked = undefined
  }

  finish(matchedTokens) {

    if (this.indentStack.length > 1) {

      // add remaining EOL (TODO: Why?)
      let lastToken = matchedTokens.slice(-1)[0]
      if (!lastToken || lastToken.tokenType !== this.tokenTypes.EOL) {
        pushEmptyToken(matchedTokens, this.tokenTypes.EOL)
      }
  
      // add remaining Dedents
      while (this.indentStack.length > 1) {
        pushEmptyToken(matchedTokens, this.tokenTypes.Dedent)
        this.indentStack.pop()
      }
    }
  }

  match(type, text, offset, matchedTokens) {
    
    // indentation can only be matched at the start of a line.
    if (matchedTokens.length) {
      const lastToken = matchedTokens[matchedTokens.length-1]
      if (lastToken.tokenType !== this.tokenTypes.EOL) {
        return null
      }
    }
  
    let match = null
    let currIndentLevel = undefined
    const isZeroIndent = text.length < offset && text[offset] !== " "
    if (isZeroIndent) {
      // Matching zero spaces Dedent would not consume any chars, thus it would cause an infinite loop.
      // This check prevents matching a sequence of zero spaces dedents.
      if (this.lastOffsetChecked !== offset) {
        currIndentLevel = 0
        match = [""]
        this.lastOffsetChecked = offset
      }
    } else {
      // possible non-empty indentation (TODO: also match tabs)
      matchWhitespace.lastIndex = offset
      match = matchWhitespace.exec(text)
      if (match !== null) {
        currIndentLevel = match[0].length
      }
    }
  
    // indentation cannot be matched without at least one space character.
    if (currIndentLevel === undefined) {
      return null
    }
  
    const { indentStack } = this
    const lastIndentLevel = indentStack[indentStack.length-1]
    if (currIndentLevel > lastIndentLevel && type === "Indent") {
      indentStack.push(currIndentLevel)
      return match
    } else if (
      currIndentLevel < lastIndentLevel &&
      type === "Dedent"
    ) {
      // if we need more than one dedent token, add all but the last one
      if (indentStack.length > 2) {
        while (
          indentStack.length > 2 &&
          indentStack[indentStack.length - 2] > currIndentLevel
        ) {
          indentStack.pop()
          pushEmptyToken(matchedTokens, this.tokenTypes.Dedent) 
        }
      }
      indentStack.pop()
      return match
    } else {
      // same indent, this should be lexed as simple whitespace and ignored
      return null
    }
  }
}

module.exports = IndentMatcher
