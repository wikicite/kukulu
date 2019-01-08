const { Parser } = require("chevrotain")
const { tokens } = require("./lexer")
const _ = require("lodash")

const {
  EOL, Rank, Novalue, Somevalue,
  ItemId, PropertyId, LexemeId, SenseId, FormId,
  QuotedString, AnnotationString, LanguageTag,  
  URL,
  ReferencePropertyId,
  Variable, AttributeName, Dot,
  True, False, Assignment,
//  Implication, Biconditional, // TODO: should also end sentences
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
      $.OPTION(() => {
        $.SUBRULE($.Subject)
        $.OR([
          {ALT: () => $.SUBRULE($.InlineSentence)},
          {ALT: () => $.SUBRULE($.AttributeSentence)},
          {ALT: () => $.SUBRULE($.AssignmentSentence)},
          {ALT: () => {}}
        ])
      })
      $.CONSUME(EOL)
    })

    $.RULE("InlineSentence", () => {
      $.OPTION(() => $.CONSUME(Rank))
      $.SUBRULE($.Predicate)
      $.SUBRULE($.Value)
      $.SUBRULE($.InlineQualifiers)
      $.SUBRULE($.InlineReferences)
    })

    $.RULE("InlineQualifiers", () => {
      $.MANY(() => {
        $.SUBRULE($.Predicate)
        $.SUBRULE($.Value)
      })
    })

    $.RULE("InlineReferences", () => {
      $.MANY(() => {
        $.CONSUME(ReferencePropertyId)
        $.OPTION( () => $.SUBRULE($.Annotation) )
        $.SUBRULE($.Value)
      })
    })

    $.RULE("Subject", () => {
      $.OR([
        {ALT: () => $.SUBRULE($.Value)},
        {ALT: () => $.CONSUME(LanguageTag)},
      ])
    })

    $.RULE("Predicate", () => {
      $.OR([
        {ALT: () => {      
          $.CONSUME(PropertyId)
          $.OPTION( () => $.SUBRULE($.Annotation) )
        }},
        {ALT: () => $.CONSUME(Variable)},
      ])
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
        {ALT: () => $.CONSUME(True)},
        {ALT: () => $.CONSUME(False)},
        {ALT: () => $.CONSUME(Variable)},
      ])
    })

    $.RULE("AttributeSentence", () => {
      $.CONSUME(Dot)
      $.CONSUME(AttributeName)
    })

    $.RULE("AssignmentSentence", () => {
      $.CONSUME(Assignment)
      $.SUBRULE($.Value)
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
