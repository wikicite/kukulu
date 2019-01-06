const { Parser } = require("chevrotain")
const { tokens } = require("./lexer")
const _ = require("lodash")

const {
  EOL,
  ItemId, PropertyId, LexemeId, SenseId, FormId,
  QuotedString, AnnotationString, LanguageTag,
  URL,
} = tokens

class KukuluParser extends Parser {
  constructor() {
    super(_.values(tokens))

    const $ = this

    $.RULE("Script", () => {
      $.MANY(() => {
        $.SUBRULE($.Sentence)
      })
    })

    $.RULE("Sentence", () => {
      $.OR([
        {ALT: () => $.SUBRULE($.SimpleSentence)},
        {ALT: () => $.SUBRULE($.ExistenceSentence)},
        {ALT: () => $.CONSUME(LanguageTag)},
        {ALT: () => {}} // empty sentence
      ])
      $.CONSUME(EOL)
    })

    $.RULE("ExistenceSentence", () => {
      $.SUBRULE($.Subject)
    })

    $.RULE("SimpleSentence", () => {
      $.SUBRULE($.Subject)
      $.SUBRULE($.Predicate)
      $.SUBRULE($.Value)
    })

    $.RULE("Subject", () => {
      $.SUBRULE($.Entity)
      //$.OR([
      //  {ALT: () => $.CONSUME(EntityId)},
      //])
    })

    $.RULE("Predicate", () => {
      $.CONSUME(PropertyId)
      $.OPTION( () => $.SUBRULE($.Annotation) )
    })

    $.RULE("Value", () => {
      $.OR([
        {ALT: () => $.SUBRULE($.Entity)},
        {ALT: () => $.SUBRULE($.MonolingualText)},
        {ALT: () => $.CONSUME(QuotedString)},
        {ALT: () => $.CONSUME(URL)},
      ])
    })

    $.RULE("Entity", () => {
      $.SUBRULE($.EntityId)
      $.OPTION( () => $.SUBRULE($.Annotation) )
    })

    $.RULE("EntityId", () => {
      $.OR([
        {ALT: () => $.CONSUME(ItemId)},
        {ALT: () => $.CONSUME(PropertyId)},
        {ALT: () => $.CONSUME(LexemeId)},
        {ALT: () => $.CONSUME(FormId)},
        {ALT: () => $.CONSUME(SenseId)},
      ])
    })

    $.RULE("MonolingualText", () => {
      $.CONSUME(QuotedString),
      $.CONSUME(LanguageTag)
    })

    $.RULE("Annotation", () => {
      $.CONSUME(AnnotationString),
      $.OPTION( () => $.CONSUME(LanguageTag) )
    })

    this.performSelfAnalysis()
  }
}

module.exports = KukuluParser
