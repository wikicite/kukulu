const { createToken, createTokenInstance } = require("chevrotain")

const matchWhitespace = new RegExp("( *-)? +", "y")

function pushSimpleToken(list, tokenType, match="") {
  const lastToken = list[list.length-1] || { endOffset: 0, endLine: 0, endColumn: 0 }
  const offset    = lastToken.endOffset + match.length
  const column    = lastToken.endColumn + match.length
  const line      = lastToken.endLine
  list.push(createTokenInstance(tokenType, "", offset, offset, line, line, column, column))
}

/**
 * Utility class to parse indent/detent tokens.
 */
class IndentMatcher {

  constructor(tokenTypes) {

    tokenTypes.Indent = createToken({
      name: "Indent",
      pattern: (...args) => this.match(...args),
      line_breaks: false
    })

    ;["Dedent", "ListItem"].forEach(name => {
      tokenTypes[name] = createToken({
        name,
        pattern: () => null,
        line_breaks: false
      })
    })

    this.tokenTypes = tokenTypes    
    this.resetStack()
  } 

  resetStack() {
    this.indentStack = [0]
    this.lastOffsetChecked = undefined
  }

  finish(result) {
    const { EOL, Dedent } = this.tokenTypes

    // add remaining Dedents
    if (this.indentStack.length > 1) {
      pushSimpleToken(result.tokens, EOL)
      while (this.indentStack.length > 1) {
        pushSimpleToken(result.tokens, Dedent)
        this.indentStack.pop()
      }
    }

    result.tokens = result.tokens.reduce((acc, cur, i, all) => {
      // combine consecutive EOL
      if (cur.tokenType === EOL && i > 0) {
        const prev = all[i-1]
        if (prev.tokenType === EOL) {
          prev.image = prev.image + cur.image
          prev.endOffset = cur.endOffset
          prev.endLine = cur.endLine
          prev.endColumn = cur.endColumn
          return acc
        }
      }
      // filter out whitespace
      if (cur.tokenType !== this.tokenTypes.Space) {
        acc.push(cur)
      }
      return acc
    },
    [])
  }

  match(text, offset, matchedTokens) {
    const { EOL, Dedent } = this.tokenTypes
    const { indentStack } = this

    // indent/detend can only be at the start of a line
    if (matchedTokens.length) {
      const prev = matchedTokens[matchedTokens.length-1]
      if (prev.tokenType !== EOL) {
        return null
      }
    }

    // try to match indent
    matchWhitespace.lastIndex = offset
    let match = matchWhitespace.exec(text)

    if (match === null) {
      if (indentStack.length > 1) {
        while (indentStack.length > 1) {
          indentStack.pop()
          pushSimpleToken(matchedTokens, Dedent)
        }
        pushSimpleToken(matchedTokens, EOL)
      }
      return null
    }
    
    const currIndentLevel = match[0].length
    const lastIndentLevel = indentStack[indentStack.length-1]

    // TODO: match ListItem

    if (currIndentLevel == lastIndentLevel) {
      // same indent
      // TODO: check for list item
      return null
    } else if (currIndentLevel > lastIndentLevel) {
      // more indent
      indentStack.push(currIndentLevel)
      return match
    } else {
      while (
        indentStack.length > 1 &&
        indentStack[indentStack.length - 1] > currIndentLevel
      ) {
        indentStack.pop()
        pushSimpleToken(matchedTokens, Dedent) 
      }
      return null
    }
  }
}

module.exports = IndentMatcher
