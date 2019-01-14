/*
CodeMirror (Possible highlighting tokens in default layout)

- keyword
- atom
- number
- def
- variable,
- punctuation
- property
- operator
- variable-2
- variable-3
- type
- comment
- string
- string-2
- meta
- qualifier
- builtin
- bracket
- tag
- attribute
- hr
- link

*/

const highlighting = {
  Comment: "comment",

  ItemId: "atom",
  PropertyId: "atom",
  LexemeId: "atom",
  SenseId: "atom",
  FormId: "atom",
  UnitId: "atom",
  ReferencePropertyId: "atom",
 
  QuotedString: "string",
  AnnotationString: "string-2",

  URL: "link",

  LanguageSet: "meta",
  LanguageTag: "meta",

  Variable: "variable-2",

  // TODO: Add tolerance
  QuantityValue: "type",

  // keywords
  True: "keyword",
  False: "keyword",
  Novalue: "keyword",
  Somevalue: "keyword",
  DataType: "keyword",
  An: "keyword",
  In: "keyword",
  Empty: "keyword",

  AttributeName: "tag",

  Rank: "operator",
  RegexMatch: "operator",
  RegexNotMatch: "operator",
  Implication: "operator",
  Biconditional: "operator",
  StrictEqual: "operator",
  StrictNotEqual: "operator",
  Equal: "operator",
  NotEqual: "operator",
  Not: "operator",
  GreaterOrEqual: "operator",
  Greater: "operator",
  LessOrEqual: "operator",
  Less: "operator",
  AssignmentOperator: "operator",
  Dots: "operator",
  Dot: "operator",
  SetOr: "operator",
  SetAnd: "operator",
  Colon: "operator",
  Comma: "operator",

  UnquotedString: "string"
}

module.exports = highlighting
