/**
 * Exposes Chevrotain lexer tokens as CodeMirror simple mode for syntax highlighting.
 *
 * See <https://codemirror.net/demo/simplemode.html>.
 */

const { format} = require("util")
const highlighting = require("../lib/highlighting")

function modeStates(tokens) {
  let states = []
  for (let name in tokens) {
    if (name in highlighting) {
      const regex = tokens[name].PATTERN
      if (typeof regex === "object") {
        states.push({
          token: highlighting[name],
          regex,
        })
      }  
    }
  }
  return states
}

function createCodemirrorModeCode(name, tokens) {
  let states = modeStates(tokens)
  let statesCode = format(states)
  return `CodeMirror.defineSimpleMode("${name}", {
  start: ${statesCode}
})`
}

module.exports = {
  modeStates,
  createCodemirrorModeCode
}
