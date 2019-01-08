const lexer = require("./lexer")
const Parser = require("./parser")
const chalk = require("chalk")
const _ = require("lodash")

function tokenize(input, out) {
  let data = lexer.tokenize(input)
  data.tokens.forEach(t => {
    let type = t.tokenType.tokenName
    out.write(type + " " + JSON.stringify(t.image) + "\n")
  })
  data.errors.forEach(e => console.error(e.message))
}

const colors = {
  ItemId: "blue",
  PropertyId: "blue",
  QuotedString: "yellow",
  AnnotationString: "yellow",
  URL: "yellow",
  LanguageTag: "green",
  Variable: "magenta",
  SKIPPED: "gray",
  // ...
}

function highlight(input, out) {
  let data = lexer.tokenize(input)
  let offset = 0

  data.tokens.forEach( token => {
    let type = token.tokenType.tokenName
    let str = token.image
    if (colors[type] && chalk[colors[type]]) {
      str = chalk[colors[type]](str)
    }
    let gap = token.startOffset - (offset + 1)
    if (gap > 0) {
      let skipped = offset ? input.substr(offset+1, gap) : input.substr(offset, gap+1)
      out.write(chalk[colors.SKIPPED](skipped))
    }
    out.write(str)
    offset = token.endOffset
  })

  if (data.errors.length) {
    // TODO: show inline
    data.errors.forEach(e => console.error(e.message))
  } 
}


function _traverse(obj, cb) {
  _.forIn(obj, function (val, key) {
    if (_.isArray(val)) {
      val.forEach(function(el) {
        if (_.isObject(el)) {
          _traverse(el, cb)
        }
      })
    }
    if (_.isObject(obj[key])) {
      cb(obj[key])
      _traverse(obj[key], cb)
    }
  })
}

function parse(input, out) {
  const parser = new Parser([])

  const tokens = lexer.tokenize(input)
  tokens.errors.forEach(e => console.error(e.message))

  parser.input = tokens.tokens
  const cst = parser.Script()

  parser.errors.forEach(e => console.error(e.message))

  // cleanup CST for display
  _traverse(cst, obj => {
    ["tokenType", "startLine", "endLine", "startOffset", "endOffset", "startColumn", "endColumn", "tokenTypeIdx"]
      .forEach(key => delete obj[key])
  })

  if (cst !== undefined) {
    out.write(JSON.stringify(cst, true, 2))
  }
}

module.exports = { tokenize, highlight, parse }
