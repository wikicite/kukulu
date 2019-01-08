const { createToken } = require("chevrotain")
const escapeRegExp = s => s.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&")

/**
 * Utility class to create an ordered set of Token Types.
 */
class TokenTypes {

  constructor(tokenConfig) {
    this.add(tokenConfig)
  }

  add(name, config) {
    if (typeof name === "object") {
      for (let key in name) {
        this.add(key, name[key])
      }
    } else if (typeof config === "string") {
      this.add(name, {
        label: config,
        pattern: RegExp(escapeRegExp(config))
      })
    } else if (config instanceof RegExp) {
      this.add(name, { pattern: config })
    } else {
      config.name = name
      this[name] = createToken(config)
    }
  }

  values() { // polyfill of Object.values
    return Object.keys(this).map(name => this[name])
  }
}

module.exports = TokenTypes
