const { Parser } = require("chevrotain")
const { tokens } = require("./lexer")
const _ = require("lodash")

const {
  EOL, Rank, Novalue, Somevalue,
  ItemId, PropertyId, LexemeId, SenseId, FormId,
  QuotedString, AnnotationString, LanguageTag,  
  URL,
  ReferencePropertyId,
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
      $.OPTION(() => $.CONSUME(Rank))
      $.SUBRULE($.Predicate)
      $.SUBRULE($.Value)
      $.SUBRULE($.Qualifiers)
      $.SUBRULE($.References)
    })

    $.RULE("Qualifiers", () => {
      $.MANY(() => {
        $.SUBRULE($.Predicate)
        $.SUBRULE($.Value)
      })
    })

    $.RULE("References", () => {
      $.MANY(() => {
        $.CONSUME(ReferencePropertyId)
        $.OPTION( () => $.SUBRULE($.Annotation) )
        $.SUBRULE($.Value)
      })
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
        // TODO: Time, Quantity, and Coordinate + Media, Tabular, Shape
        {ALT: () => $.CONSUME(Novalue)},
        {ALT: () => $.CONSUME(Somevalue)},
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
