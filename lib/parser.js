const { Parser } = require("chevrotain")
const { tokens } = require("./lexer")

const {
  // Punctation
  EOL,
  Indent, Dedent,
  Colon, Dot, Dots,
  SetOr,
  Rank, 

  // Keywords
  DataType, Novalue, Somevalue, Empty, True, False,

  ItemId, PropertyId, LexemeId, SenseId, FormId,
  QuotedString, AnnotationString, LanguageTag,  
  URL, QuantityValue, UnitId, 
  DateValue, TimeValue, TimePrecision,
  Coordinate,
  ReferencePropertyId,
  Variable, AttributeName,
  UnquotedString,

  // Operators
  AssignmentOperator,
  Not,

  // Comparison Operators
  RegexMatch, RegexNotMatch,
  StrictEqual, StrictNotEqual,
  Equal, NotEqual,
  GreaterOrEqual, Greater,
  LessOrEqual, Less,
  An, In,

  If,
} = tokens

class KukuluParser extends Parser {
  constructor() {
    super(tokens.values())

    const $ = this

    $.RULE("Script", () => {
      $.AT_LEAST_ONE_SEP({          
        SEP: EOL,
        DEF: () => {
          $.OPTION(() => $.SUBRULE($.Sentence))
        }
      })
    })

    $.RULE("Sentence", () => {
      $.OR1([
        {ALT: () => $.SUBRULE($.Rule)},
        {ALT: () => {
          $.SUBRULE($.Subject)
          $.OR2([
            {ALT: () => $.SUBRULE($.IntendedBlock)}, 
            {ALT: () => $.SUBRULE($.PredicateSentence)}, 
          ])
        }},
        {ALT: () => $.SUBRULE($.Assignment)},
        {ALT: () => {
          $.SUBRULE2($.Value)
          $.OPTION(() => $.SUBRULE($.Comparison))
        }},
      ])
    })

    $.RULE("Subject", () => {
      $.OR([
        {ALT: () => $.SUBRULE($.Entity)},
        {ALT: () => $.CONSUME(Variable)}
      ])
    })

    $.RULE("IntendedBlock", () => {
      $.CONSUME(Colon)
      $.CONSUME1(EOL)
      $.CONSUME(Indent)
      $.AT_LEAST_ONE(() => $.SUBRULE($.FieldLine))
      $.CONSUME(Dedent)
    })

    $.RULE("FieldLine", () => {
      $.SUBRULE($.Field)
      $.OR([
        {ALT: () => {
          $.CONSUME(Colon)
          $.SUBRULE1($.AnyValue)
          $.CONSUME(EOL)
        }},
        {ALT: () => $.SUBRULE($.IntendedBlock)}
      ]) 
    })

    $.RULE("Field", () => {
      $.OR([
        // TODO: allow ranked property?
        {ALT: () => $.SUBRULE($.EntityId)},
        {ALT: () => $.CONSUME(AttributeName)},
      ])
    })

    $.RULE("PredicateSentence", () => {
      $.OPTION(() => $.CONSUME(Rank))
      $.SUBRULE($.Predicate)
      $.OR1([
        {ALT: () => $.SUBRULE2($.IntendedBlock)},
        {ALT: () => {
          $.CONSUME(Colon)
          $.SUBRULE1($.AnyValue)
        }},
        {ALT: () => {
          $.SUBRULE2($.Value)
          $.OR3([
            {ALT: () => $.SUBRULE1($.IntendedBlock)},
            {ALT: () => {
              $.OPTION2(() => $.SUBRULE($.Qualifiers))
              $.OPTION3(() => $.SUBRULE($.References))
            }}
          ])
        }},
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

    $.RULE("Qualifiers", () => {
      $.AT_LEAST_ONE(() => {
        $.SUBRULE($.Predicate)
        $.SUBRULE($.Value)
      })
    })

    $.RULE("References", () => {
      $.AT_LEAST_ONE(() => {
        $.CONSUME(ReferencePropertyId)
        $.OPTION( () => $.SUBRULE($.Annotation) )
        $.SUBRULE($.Value)
      })
    })

    // TODO: Also allow expressions
    $.RULE("Value", () => {
      $.SUBRULE1($.AtomValue)
      $.OR([
        { 
          ALT: () => { // range                         
            $.CONSUME(Dots)
            $.SUBRULE2($.AtomValue)
          }
        },
        { 
          ALT: () => {
            $.CONSUME(SetOr)
            $.AT_LEAST_ONE_SEP({
              SEP: SetOr,
              DEF: () => $.SUBRULE3($.AtomValue)
            })
          }
        },
        { ALT: () => {} }
      ])
    })

    $.RULE("AtomValue", () => {
      $.MANY1(() => $.CONSUME(Not))
      $.SUBRULE($.Atom)
      $.MANY2(() => $.SUBRULE($.Attribute))
    })

    $.RULE("AnyValue", () => {
      $.OR([
        {ALT: () => $.SUBRULE($.Value)},
        {ALT: () => $.CONSUME(UnquotedString)},
      ])
    })

    $.RULE("Attribute", () => {
      $.CONSUME(Dot)
      $.CONSUME(AttributeName)
    })

    $.RULE("Assignment", () => {
      $.CONSUME(Variable)
      $.CONSUME(AssignmentOperator)
      $.SUBRULE($.AnyValue)
    })

    $.RULE("Atom", () => {
      $.OR([
        {ALT: () => $.SUBRULE($.Entity)},
        {ALT: () => $.SUBRULE($.MonolingualText)},
        {ALT: () => $.CONSUME(QuotedString)},
        {ALT: () => $.CONSUME(URL)},
        {ALT: () => $.SUBRULE($.Quantity)},
        {ALT: () => $.SUBRULE($.Time)},
        {ALT: () => $.CONSUME(Coordinate)},
        // TODO: Media, Tabular, Shape
        {ALT: () => $.CONSUME(Novalue)},
        {ALT: () => $.CONSUME(Somevalue)},
        {ALT: () => $.CONSUME(True)},
        {ALT: () => $.CONSUME(False)},
        {ALT: () => $.CONSUME(Variable)},
        {ALT: () => $.CONSUME(LanguageTag)},
        {ALT: () => $.CONSUME(DataType)},
        {ALT: () => $.CONSUME(Empty)},
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

    $.RULE("Annotation", () => {
      $.CONSUME(AnnotationString),
      $.OPTION( () => $.CONSUME(LanguageTag) )
    })

    $.RULE("MonolingualText", () => {
      $.CONSUME(QuotedString),
      $.CONSUME(LanguageTag)
    })

    $.RULE("Time", () => {
      $.CONSUME(DateValue)
      $.OPTION1(() => $.CONSUME(TimeValue))
      $.OPTION2(() => $.CONSUME(TimePrecision))
    })

    $.RULE("Quantity", () => {
      $.CONSUME(QuantityValue)
      $.OPTION1(() => {
        $.CONSUME(UnitId) 
        $.OPTION2(() => $.SUBRULE($.Annotation))
      })
    })

    $.RULE("Comparison", () => {
      $.SUBRULE($.ComparisonOperator)
      $.SUBRULE3($.Value)
    })

    $.RULE("ComparisonOperator", () => {
      $.OR([
        {ALT: () => $.CONSUME(RegexMatch)},
        {ALT: () => $.CONSUME(RegexNotMatch)},
        {ALT: () => $.CONSUME(StrictEqual)},
        {ALT: () => $.CONSUME(StrictNotEqual)},
        {ALT: () => $.CONSUME(Equal)},
        {ALT: () => $.CONSUME(NotEqual)},
        {ALT: () => $.CONSUME(GreaterOrEqual)},
        {ALT: () => $.CONSUME(Greater)},
        {ALT: () => $.CONSUME(LessOrEqual)},
        {ALT: () => $.CONSUME(Less)},
        {ALT: () => $.CONSUME(An)},
        {ALT: () => $.CONSUME(In)},
      ])
    })

    $.RULE("Rule", () => {
      $.CONSUME(If)
      $.SUBRULE($.Value)
      $.CONSUME1(Colon)
      $.CONSUME1(EOL)
      $.SUBRULE1($.ScriptBlock)
      /*      $.OR([
        {
          // not sure why this is needed?!
          GATE: () => 
            this.LA(1).tokenType === EOL && this.LA(2).tokenType === Else,
          ALT: () => {
            $.CONSUME2(EOL)
            $.CONSUME2(Else)
            $.SUBRULE($.ElseScript)
          }
        },
        {ALT: () => { }},
      ])*/
    })

    $.RULE("ElseScript", () => {
      $.CONSUME2(Colon)
      $.CONSUME(EOL)
      $.SUBRULE2($.ScriptBlock)
    })

    $.RULE("ScriptBlock", () => {
      $.CONSUME(Indent)
      $.SUBRULE($.Script)
      $.CONSUME(Dedent)
    })

    this.performSelfAnalysis()
  }
}

module.exports = KukuluParser
