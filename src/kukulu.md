::: Warning
This document contains no official, established, or final specification but
a request for comments. See

* <https://github.com/wikicite/kukulu> for source code and issue tracker
* [syntax diagram] for a preliminary formal grammar

:::

# Introduction

**Kukulu** (named after the Hawaiian word *kūkulu*: to build, construct) is a formal language to express, query, and model data in the database model of [Wikibase]. Wikibase is primarily known for the knowledge base [Wikidata]. Its [database model] has official serializations in JSON and in RDF. Kukulu defines an [alternative syntax](#syntax) with extensions to express [queries] and [rules].

[Wikibase]: https://wikiba.se/
[Wikidata]: https://www.wikidata.org/
[YAML]: https://en.wikipedia.org/wiki/YAML

## Motivation

Existing methods to express Wikibase data such as JSON and RDF can be complex to read and write (see [data bindings]). This also applies to query languages and methods to express rules and constraints (see [query and rule languages]).

The goal of Kukulu is to provide a simple data language designed for the Wikibase [database model]. It is inspired by QuickStatements format among other influences. The data language is not intended to replace all existing alternatives but to cover most typical use cases.

## Overview

Features of the Kukulu data language can be divided into three levels that build upon each other:

* A [serialization language]

* A [query language]

* A [rule language]

Additional features that can be used on each level include optional [annotations].

## Limitations

The current draft of Kukulu does not fully support the following elements that might be considered part of the Wikibase database model. Support may be added sooner or later:

* namespace ids
* badges
* claim identifiers
* snaks-order
* qualifiers-order
* reference hashes

The [query language] is more limited than SPARQL but easier for small queries. The [rule language] is in a very early state of developlemt and it requires additional discussion.

# Background

## Database model
[database model]: #database-model

The **database model of Wikibase** (also referred to as *conceptual data model of Wikibase*) is [implemented canonically in PHP](https://github.com/wmde/WikibaseDataModel) and [described at MediaWiki.org](https://www.mediawiki.org/wiki/Wikibase/DataModel). The model is most visible through the Wikibase user interface. This specification assumes basic knowledge of the Wikibase database model and its terminology.

A good starting point to learn about the Wikibase database model in practice is the [Wikidata introduction] and help pages such as [Help:Items], [Help:Statements], and [Help:Lexemes]. The best way to get familiar with data in Wikibase is regularly contributing to Wikidata.

[Wikidata introduction]: https://www.wikidata.org/wiki/Wikidata:Introduction
[Help:Items]: https://www.wikidata.org/wiki/Help:Items
[Help:Statements]: https://www.wikidata.org/wiki/Help:Statements
[Help:Lexemes]: https://www.wikidata.org/wiki/Help:Lexemes

## Data bindings

Official serializations of the Wikibase database model exist [in JSON](https://www.mediawiki.org/wiki/Wikibase/DataModel/JSON) and [in RDF](https://www.mediawiki.org/wiki/Wikibase/DataModel/RDF). Additional serializations exist as part of the tools [QuickStatements], [GraphQL API], and [wikidata-cli].
Data bindings in addition to the PHP sources of Wikibase are available as part of programming libraries at least in Lua ([MediaWiki Wikibase Client]), JavaScript ([wikidata-sdk]), Java ([Wikidata Toolkit]), Python ([Wikidata for Python]), and .NET ([Wiki Client Library]).

[QuickStatements]: https://www.wikidata.org/wiki/Help:QuickStatements
[GraphQL API]: https://tools.wmflabs.org/tptools/wdql.html

[MediaWiki Wikibase Client]: https://www.mediawiki.org/wiki/Extension:Wikibase_Client/Lua
[wikidata-sdk]: https://www.npmjs.com/package/wikidata-sdk
[wikidata-cli]: https://www.npmjs.com/package/wikidata-cli
[Wikidata Toolkit]: https://www.mediawiki.org/wiki/Wikidata_Toolkit
[Wikidata for Python]: https://pypi.org/project/Wikidata/
[Wiki Client Library]: https://github.com/CXuesong/WikiClientLibrary

## Query and rule languages

*This section needs to be extended*

* SPARQL (see [Wikidata query service])
* [ShEX for Wikidata](https://www.wikidata.org/wiki/Wikidata:WikiProject_ShEx),
* [GraphQL API]
* Programming libraries

[Wikidata query service]: https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service

# Data types
[data type]: #data-types

Kukulu supports all Wikibase data types including the WikibaseLexeme extension:

* [Entities]
  * [Item] and [Property]
  * [Lexeme], [Sense], and [Form]
* [String]
  * [Mathematical expression]
  * [External Identifier]
  * [Url]
* [Monolingual text]
* [Time]
* [Quantity]
* [Coordinate]
* [Media]
  * [Tabular]
  * [Shape]

All data types are reserved keywords:

~~~ebnf
WikibaseDataType ::= 'Item' | 'Property' | 'Lexeme' | 'Sense' | 'Form' |
                     'String' | 'Text' | 'Math' | 'Time' | 'Id' | 'Url' |
                     'Quantity' | 'Coordinate' | 'Shape' | 'Media' | 'Tabular'
~~~

Kukulu defines additional data types:

* [Bool]
* [Set]
* [Range]
* [LanguageTag]
* [LanguageSet]
* [DataType]

~~~ebnf
KukuluDataType  ::=   'Bool' | 'Set' | 'Range' | 'DataType'
                      'LanguageTag' | 'LanguageSet'
~~~

## Entities

Instances of entity types ([Item], [Property], [Lexeme], [Sense], and [Form]) are referened by their plain ID:

~~~example
Q42		an  Item
P31		a   Property
L7		a   Lexeme
L7-S1	a   Sense
L7-F4	a   Form
~~~

~~~ebnf
IdNumber        ::=  [1-9] [0-9]*
ItemId          ::=  'Q' IdNumber
PropertyId      ::=  'P' IdNumber
LexemeId        ::=  'L' IdNumber
SenseId         ::=  LexemeId '-' 'S' IdNumber
FormId          ::=  LexemeId '-' 'F' IdNumber
~~~

Entities can always be followed by an [annotation].

Entities have additional read-only attributes:

* `id` gives the entity id as [String]
* `uri` gives the entity URI as [Url]
* `bool` gives the [Bool] value `True` if the entity exists and `False` otherwise

~~~example
Q42.id   === "Q42"
Q42.uri  === <http://www.wikidata.org/entity/Q42>
Q42.bool === True
Q6.bool  === False  # does not exist in Wikidata
~~~

### Item
[items]: #item

Items have attributes `labels`, `descriptions`, `aliases`, `claims`, and `sitelinks`. The read-only attributes `lastrevid` and `modified` give the internal revision id (as [Quantity]) and the timestamp of last modification (as [Time]). 

### Property

Properties habe same attributes like [items].

### Lexeme
[lexemes]: #lexeme

Lexemes have attributes `lemmas`, `category`, `language`, `claims`, `senses`, and `forms`. The attribute `category` equals to the lengthy key `lexicalCategory` in the JSON [data binding](#data-bindings).

~~~example
L7:
  lemmas:
    en: cat
  category: Q1084'substantive'
  language: Q1860
  ...
  # TODO: exemplify senses and forms
~~~

...

### Sense
[senses]: #sense

...

### Form
[forms]: #form

...

## String
[strings]: #string

Strings (reserved word `String`) can be expressed quoted by double quotes (`"..."`) or unquoted. Unquoted strings are possible following `: ` or `:=` if they start with a letter or digit and don't contain the character sequence ` #`.

Quoted strings use same escape rules like JSON grammar except escape sequences also include `\'`.

~~~ebnf
String           ::=  QuotedString | PlainString
QuotedString     ::=  '"' (StringCharacter | EscapedCharacter)* '"'
StringCharacter  ::=  [#x20-#x10ffff] - ["\]   # exclude U+22 (") and U+5C (\)
EscapedCharacter ::=  '\' ( '"' | ''' | '\' | '/' | 'b' | 'n' | 'r' | 't' | 'u' Hex Hex Hex Hex )
Hex              ::=  'u' [0-9A-Za-z] [0-9A-Za-z] [0-9A-Za-z] [0-9A-Za-z] 
~~~

A third type of strings is used for [annotations].

The attribute `length` of a string gives its number of Unicode characters after NFCK normalization.

Casting to String is done with the `str` attribute:

~~~example
Url(?str) === ?x.str
~~~


## Monolingual text

Monolingual text (reserved word `Text`) can be expressed by a quoted string directly followed a [language tag].

~~~example
"love"@en
"حب"@ar
~~~

~~~ebnf
MonolingualText ::=  QuotedString LanguageTag
~~~

The read-only attribute `value` gives the [string] value and the attribute `language` gives the [language tag]:

~~~example
?text == "xxx"@und
<=>
?text.value == "xxx" && ?text.language == @und
~~~

## External identifier

External identifiers (reserved word `Id`) are expressed as [strings]. To explicitly state that an identifier is not a string use a condition its type:

~~~example
"foo"
"12345" an Id
~~~

~~~ebnf
ExternalId      ::=  String
~~~

## Mathematical expression

Mathematical expressions (reserved word `Math`) are expressed as [strings]. To explicitly state that a mathematical expression is not a string use a condition on its type.

~~~example
"e^{i \pi} + 1 = 0" 
"e = mc^2" a Math
~~~

~~~ebnf
MathExpression  ::=  String
~~~

## Url 

Values of data type `Url` can be expressed as [strings] or unqoted URLs.

~~~example
"https://www.wikidata.org/"
https://www.wikidata.org/
<https://www.wikidata.org/>
http://example.org
~~~


~~~ebnf
URL             ::=  PlainURL | QuotedURL
PlainURL        ::=  [a-z]+ '://' [^\s<>"{}|^`\]+ 
QuotedURL       ::=  '<' PlainURL '>'
~~~

Casting to Url is done with the `uri` attribute:

~~~example
Url(?x) === ?x.uri
~~~


## Time

Values of data type `Time` are represented with its attributes `time`, `timezone`, `precision`, `before`, `after`, and `calendarmodel` (see Wikibase [database model] for details). The following example expresses the date `2001-12-31` with explicitly giving the default values for each optional attributes:

~~~example
time: +2001-12-31T00:00:00Z     # mandatory
timezone: 0
precision: 11
before: 0
after: 0
calendarmodel: Q1985727
~~~

The same time can also be expressed in any of the following forms:

~~~example
+2001-12-31T00:00:00Z       # full form
+2001-12-31T00:00:00+00:00  # explicit timezone
+2001-12-31T00:00:00Z/11    # explicit precision
+2001-12-31T00:00           # some optional parts left out
2001-12-31                  # all optional parts left out
~~~

If days are omitted or set to zero, the default precision is changed to `10` (month):

~~~example
2013-12-00
2013-12
2013-12/10
~~~

If days and month are omitted or set to zero, the default precision is changed to `9` (year):

~~~example
# equivalent:
2013-00-00
2013-00
2013+00
2013/8
2013+00/8

# not a year but a quantity:
2013
~~~

A simple year cannot be abbreviated as plain integer value except if explicitly given as value of attribute `time`:

~~~example
- time: 2013  # value of type Time with time set to +2013-00-00T00:00::Z and precision 9
- 2013        # value of type Quantity
~~~

:::TODO
Add formal syntax
:::

## Quantity

Values of data type `Quantity` (known as [Quantity](http://wikiba.se/ontology#Quantity) in the Wikibase ontology) are represented with its attributes `amount`, `lowerBound`, `upperBound`, and `unit` (see Wikibase [database model] for details). The attributes `lowerBound` and `upperBound` are optional and have no default values. The attribute `unit` is optional with the special default value `1` and data type [item] otherwise.

~~~example
- amount: 42            # 42
  unit: 1
- amount: 42            # 42±0 (distinct from 42)
  lowerBound: 42
  upperBound: 42
- amount: 99            # 99 bottles of beer
  unit: Q23668
- amount:               # 10.38±0.005 km²
  upperBound: 10.385
  lowerBound: 10.375
~~~

Quantities can be expressed in abbreviated form:

~~~ebnf
Quantity        ::=  QuantityValue Unit?
QuantityValue   ::=  Number Tolerance?
Number          ::=  Decimal Exponent?
Decimal         ::=  [+-]? ( [0-9]+ | [0-9]* '.' [0-9]+ )
Exponent        ::=  [eE] Integer
Integer         ::=  [+-]? [0-9]+
Tolerance       ::=  '~' | '!' | PlusMinus Number | '[' Number ',' Number ']'
PlusMinus       ::=  '±' | '+/-' | '+-'
Unit            ::=  'U' IdNumber [ Annotation ]
~~~

The tolerances `~` and `!` can be interpreted as following:

~~~example
42~   <=>  42+-0.5
0.1~  <=>  0.1±0.05
42!   <=>  42±0
~~~

Note that every number in Kukulu is a Quantity:

~~~example
?string.length  in  12+-2   # length is 10 to 14
~~~

## Coordinate
[coordinates]: #coordinate

Values of data type geographic coordinate (reserved word `Coordinate`, known as [GlobeCoordinate](http://wikiba.se/ontology#GlobeCoordinate) in the Wikibase ontology) are represented with its attributes `latitude`, `longitude`, `precision`, and `globe`. (see Wikibase [database model] for details). The `globe` is a value of type [item] and set to [Q2] by default.

Quantities can be expressed in abbreviated form:

~~~example
Q3669835 P625 @043.26193/010.92708
~~~

~~~ebnf
CoordinateValue ::= '@' Decimal '/' Decimal
~~~

:::TODO
* Support precision (can it have arbitrary values?)
* Also support degree-minute-second format and mixed forms
:::

[Q2]: http://www.wikidata.org/entity/Q2

## Media

Values of data type commons media (reserved word `Media`, known as [CommonsMedia](http://wikiba.se/ontology#CommonsMedia) in the Wikibase ontology) ...

## Tabular

Values of data type tabular data (reserved word `Tabular`) ...

## Shape

Values of data type geographic shape (reserved word `Shape`, known as [GeoShape](http://wikiba.se/ontology#GeoShape) in the Wikibase ontology) ...

*See also operator [in]*

## Additional data types

### Bool

The `Bool` data type is returned for [boolean operators]. The reserved words `True` and `False` hold predefined [instances] of this data type.

~~~example
?isItem := ?x.type === Item
?isItem.type === Bool

True.type === Bool
~~~

Casting to Bool is done with the attribute `bool`:

~~~example
Bool(?x) === ?x.bool
~~~

### Set

Sets can be defined by [set variables] and [set operators].

~~~example
# extended type constraint on property P26: if A is spouse of B, then both must
# be instance of human, fictional character, person, or mythical character

?A P26 ?B  =>  ?A & ?B  P31  Q5 | Q95074 | Q215627 | Q4271324

# equivalent with prefix set operators:

?A P26 ?B => all(?A ?B) P31 any(Q5 Q95074 Q215627 Q4271324)
~~~

The attribute `length` of a set gives the number of elements in a set as [Quantity].

~~~example
# works with more then 100 authors
?work P50 ?*authors ; ?authors.length > 100

# Entity := Item | Property | Lexeme | Sense | Form
Entity.length === 5
~~~

See also operator [in].

The reserved keyword [`Empty`](#empty) denotes the empty set.

### Range

String, Time, and Quantity can be combined to ranges with the [range operator]:

    "a"..."z"
    1901-01-01...2000-12-31
    1...42  

Indiviual values can be checked whether they are part of a range, for instance:

    ?date in 1901-01-01...2000-12-31

is equivalent to

    ?date >= 1901-01-01
    ?date <= 2000-12-13

The attribute `upper` and `lower` give the upper and lower bound of a set, respectively.

*See also operator [in]*

### LanguageTag
[language tag]: #languagetag

Language codes are used at values of type [monolingual text] and for [annotations].

~~~example
@ar
@zh-yue
@mis-x-Q36790
~~~

~~~ebnf
LanguageTag     ::=  '@' [a-zA-Z]+ ('-' [a-zA-Z0-9]+)*
~~~

Additional constraints may apply.

:::TODO
See <https://www.wikidata.org/wiki/Help:Monolingual_text_languages>,
<https://meta.wikimedia.org/wiki/Language_codes>, and special
language codes such as `mis-x-Q36790` (*specified where?*).
:::


### LanguageSet
[language set]: #languageset

A language set is an infinite [set] of [language tag] values.

~~~ebnf
LanguageSet     ::=  LanguageTag '-'
~~~

~~~example
?en   := @en-     # @en | @en-US | @en-GB | ... 
?misc := @mis-x-  # @mis-x-Q36790 | ...
~~~

The `size` of a LanguageSet is not defined.

### DataType

All [data type] keywords have data type `DataType`. The read-only attribute `uri` gives the URI of a data type in Wikibase ontology as [Url]. The read-only attribute `str` gives the keyword as [String].

~~~example
Shape.str     === "Shape"
Shape.uri     === <http://wikiba.se/ontology#GeoShape>
~~~

## Instances

Kukulu defines some reserved keywords for predefined  expressions.

### True and False

The keyword `True` and `False` are defined as instances of data type [Bool].

### Entity

The keyword `Entity` is defined as [Set] of the data types [Item], [Property], [Lexeme], [Sense], and [Form].

~~~example
Entity === Item | Property | Lexeme | Sense | Form
~~~

### Empty

The keyword `Empty` ist defined as the empty [Set].

~~~example
Empty.length === 0
~~~

# Syntax
[serialization language]: #syntax
[serialization]: #syntax

*See [grammar] for additional syntax rules*

A Kukulu script consists of a newline-separated sequence of **sentences**.

~~~ebnf
Script      ::= Sentence? ( EOL Sentence? )*
~~~

A sentence is serialized in one logical line, optionally followed by in intended block. Logical lines, blank lines, indentation, and comments follow Python syntax (see [lexical analysis in Python](https://docs.python.org/3.8/reference/lexical_analysis.html])). In addition it is possible to join logical lines with the [semicolon operator].

Entities with their labels, aliases, claims etc. can be serialized in [key-value form], in [line-based form], and [mixed form].


## Key-value form
[Key-value form]: #key-value-form
[key-value form]: #key-value-form

The **key-value form** is inspired by [YAML] (but differs in several ways).

~~~example
# entity identifier as root key
Q4115189:

  # labels, descriptions, and aliases with language tag as key of each value
  labels:
    ar: حب
    en: love
    es: amor
  descriptions: 
    ar: شعور انجذاب عاطفي تجاه شخص
    en: strong, positive emotion based on affection

  aliases:
    # aliases can be given as list...
    ar:
    - محبة
    - حُب
    # ...or as single values
    es: amar

  sitelinks:
    arwiki: حب
    enwiki: Love
    eswiki: Amor

  claims:

    # single value
    P2002: bulgroz
    P31: Q5

    # list of values
    P1775: 
    - Q3576110
    - Q12206942

    # qualifiers, references, and ranks
    P369:
      value: Q12345

      # single value
      qualifiers:
        P580: 1970-01-01
      
      # multiple values
      references:
      - P854: http://example.org/
        P1932: Example
      - P248: Q28549308

      rank: normal            # either preferred, normal (default) or deprecated
    
    # values can also be given by their data type attributes
    P1450:                    # e.g. monolingual text...
      text: bulgroz
      language: fr

    P1106:                    #  ...or quantity
      amount: 42
      unit: Q42    
~~~

The example has partly been adopted from [an example of wikidata-cli](https://github.com/maxlath/wikidata-edit/blob/master/docs/how_to.md#entity) that uses a similar structure.

### Abbreviations

~~~example
Q4115189  # colons are optional before an intended block or list

  # claims do not need to be put under key 'claims'
  P31: Q5

  P369: Q12345       # implicit 'value' key

	# qualifiers do not need to be put under key 'qualifiers'
    P580: 1970-01-01
      
    # one reference with properties starting with 'S' instead of 'P'
    S854: http://example.org/
    S1932: Example
~~~

### Merging

Repeated keys are always merged. Repeated values are merged into lists.

~~~example
Q316
  labels
    en: love
  P31: Q9415

Q4115189
  P31: Q5

Q316
  labels
    de: Liebe
  P31: Q840396
  P31: Q170774 

<=> # equivalent

Q4115189
  P31: Q5

Q316
  labels
    en: love
    de: Liebe
  P31
  - Q9415
  - Q840396
  - Q170774 
~~~

Merging is not applied between sections of a document. Sections are separated with an explicit **section separator** (`---` or on a line) and with [rules] operators.

### Quotation

Values must be quoted if they don't start with a letter or digit or if they contain the character sequence ` #`. See [String] for details.

## Line-based form
[line-based form]: #line-based-form

The **line-based form** is inspired by [QuickStatements] syntax:

~~~example
Q316 Len "love"
Q316 Den "strong, positive emotion based on affection"
Q316 Aes "amores" 
Q316 Sarwiki "حب"

# TODO: exemplify claims, including ranks and special values
Q316 P31 Q9415

# Value and qualifier
Q41577083 P570 1586/7 P1319 1586/9
~~~

*TODO:* Check whether this syntax is fully compatible with QuickStatement (is QuickStatement syntax a subset of Kukulu?).

## Mixed form

[Key-value form] and [line based form] can be mixed. In fact they are only two sides of a spectrum.

~~~example
# qualifiers as key-values
Q41577083 P570 1586/7:
  P1319: 1586/9

# values and qualifiers in key-value syntax
Q41577083 P570:
- value: 1586/7     # value
  P1319: 1586/9     # qualifier

# TODO: more variants...
~~~

## Ranks

**Ranks** can be expressed with `^` (preferred rank), `~` (deprecated rank), and `*` (any rank) preprending a property:

~~~example
?person P463 ?organization      # truthy member-of (default)
?person ~P463 ?organization     # deprecated member-of
?person ^P463 ?organization     # preferred member-of (all statements)
?person *P463 ?organization     # member-of (all statements)
~~~

Note that predicates of qualifiers and references cannot have ranks.

## Attributes

An **attribute** can be referenced inline prepended by a dot or intended followed by a colon. The attribute name must start with a lowercase letter, optionally followed by lowercase and uppercase letters:

~~~example
Q42.id == "Q42"

Q42:
  id: Q42
~~~

~~~ebnf
AttributeName   ::= [a-z] [a-zA-Z]
~~~

The names `novalue` and `somevalue` are forbidden as attribute names.

# Queries
[query language]: #queries

A [serialization] can be used as query to check whether the specified entities with given labels, aliases, claims etc. exists. [Variables] can be used as placeholders for unknown entities, properties and values.

## Variables

Two types of variables exist:

### Simple variables

Simple variables are bound do one value. They are referenced with a question mark followed by the variable name:

~~~example
?entity:
  labels:
    en: ?label
  aliases:
    en:
    - ?alias1
    - ?alias2
  claims:
    P31: ?class
    ?property: ?value   # any property except P31
~~~

~~~example
?work P463 ?organization:
  P580 ?start   # qualifier
  S248 ?source  # reference
~~~

A variable can be made *optional* with two question marks:

::: example

~~~example
?human P31 Q5
  P569 ??birthdate
~~~

SPARQL equivalent:

~~~sparql
SELECT ?human ?birth WHERE {
  ?human wdt:P31 wd:Q5 .
  OPTIONAL { ?human wdt:P596 ?birth }
}
~~~
:::

### Set variables

**Set variables** are bound to multiple values at one. A set variable is referenced with a question mark followed by plus or asterisk:

~~~example
?*humans P31 Q5			# bound to the set of all humans 

?human P31 Q5			# bound to each human

?human P40 ?+children	# bound to each parent and to the set of its children

?human					# bound to
  P31 Q5				# each human
  ~P596 ?*birth			# and optionally its deprecated dates of birth
~~~

See [set] and [set operators] for extended usage of set variables.

## Attributes

Core elements of [entities] should be accessible via their common (JSON) name:

* `Q42`**`.labels.en`** `== "Douglas Adams"`
* `L7`**`.lemmas.en`** `== "cat"`
* ...

**Methods** should be provided to for each [data type], e.g.

* `Q42.`**`type`** `== Item`
* `Q42.`**`id`**
* `?text.`**`language`** `== @en`
* `?lexeme.`**`lexicalCategory`** `== Q1084 # noun`
* `?tabular.`**`fields`**
* `2018-12-31.`**`precision`** `== 11 # days`

A very small subset of these methods is available in SPARQL but not beyond XSD
data types. Wikibase schema language should also do **implicit type casting**
(also useful for comparison operator `==`):

* `?uri.length` instead of `strlen(str(?uri))` 

Some data types can be converted to each other by implicit or explicit [type casting].

## Assignments

~~~example
?instance-of := P31
?+instace-or-subclass-of := P31 | P279
~~~

This corresponds to `BIND` in SPARQL.

Variables can only be assigned once.

## Statements

Simple statements can be expressed in QuickStatements syntax extended by variables:

~~~example
?human P31  Q5          # variable item, property, value
?human P569 1952-03-11  # same with date as value
Q42 P27 ?               # country of citizenship (value not bound to variable)
? ? ?                   # all possible statements
~~~

Property path inspired by SPARQL are useful:

    ?work P50 ? =>                  # if item has an author 
        ?work P31/P279* Q17537576   # then it must be subclass of creative work

## Query evaluation

Queries can be evaluated against a Wikibase instance.

~~~
> Q7    # does not exist in Wikidata
Empty
> Q42 an Item
True
> Q42.labels.en
"Douglas Adams"
> Q42 P31 Q5
True
~~~

# Rules
[rule language]: #rules

**Constraints** can be expressed with [rule operators].

~~~example
?work P50 ?  => ...             # if item has an author 

# all items must be instance of subclass of something
?item an Item => ?item P31|P279 ?

# in contrast
?item P31|P279 ?   # an item that is an instance or subclass of something
~~~

# Operators

### ; {#semicolon}
[semicolon operator]: #semicolon

Can be used to merge logical lines. The logical line after semicolon has same intention level as the logical line before the operator.

### ,

Can be used to construct lists


## boolean operators

Normal equality operators make heavy use of [type coercion]. Strict equality operators require both operands to have exactely the same [data type].

~~~example
?a == ?b    # normal equality
?a != ?b

?a === ?b   # strict equality
?a !== ?b

!?a         # booleannegation
~~~

## comparision

Values of comparable data types can be compared with:

~~~example
?a >  ?b
?a >= ?b
?a <  ?b
?a <= ?b
~~~
	
Comparing non-comparable data types always returns `False`.

## regular expression

To match a value against a regular expression:

~~~example
?a =~ ?regex
?a !~ ?regex
~~~

:::TODO
Support (named) capturing groups (implicit assignment), e.g.

    ?foo :=~ "(.+), (.+)"                    # assign ?1 and ?2
    ?foo :=~ "(?<given>.+), (?<surname>.+)"  # assign ?given and ?surname
:::

## a / an

The operator `a` or its alias `an` can be used as shortcut to test the [data type] of an element:

~~~example
?s  a  String  <=>  ?s.type  == String
?x  an Item    <=>  ?x.type  == Item
?id an Id|Url  <=>  ?id.type == Id|Url
~~~

## in

The operator `in` can be used to check whether 

* an value is member of a [Set]
* an value is inside a [Range]
* a [coordinate] is inside a [Shape]

## Assignment 

The assignment operator `:=` can be used to define [variables].

~~~
?douglas := Q42 
~~~

## Set operators

Infix [set] operators:

~~~example
... | ... | ...
... & ... & ...
... in ...
~~~

Prefix set operators `any` and `all`:

~~~example
any( ... )
all( ... )
~~~

~~~example
# Short names of entities (acronyms, abbreviations etc.) should also be aliases
?entity P1813"short name" ?name =>
  ?name in ?entity.aliases
~~~

## range operator

The range operator `...` defines a [range].

~~~example
2012-01...2013-07
Q1...Q7
?a...?b
~~~

Both parts of a range must have same [data type].

## Type casting
[type casting]: #type-casting
[type coercion]: #type-casting

All [data types] keywords can be used to convert between data types.

~~~ebnf
Time("2018-12-31") === 2018-12-31
String(2018-12-31) === "2018-12-31"
~~~

## rule operators

~~~example
=>	 # material implication (if...then... / ...implies...)

# alternative syntax
if ...
   ...
else
  ...

if
  ...
then
  ...

<=>  # biconditional (...if and only if...)
iff  # alias
~~~

Rules can also be written with keywords `if`, `then`, `else`, `unless`, `case`...

See also [sets] for OR-clauses.

# Annotations
[annotation]: #annotations

An entity or variable can be followed by a single-quoted string:

~~~example
?person:
  P31'instance of' Q5'human'
  P569'date of birth' ?date
~~~

Applications can choose to ignore annotations, translate annotations, and/or check whether annotations match entity labels/lemmas.

Annotations can have languages: 

~~~example
?person:
  P31'είναι'@gr Q5'Mensch'@de
  P569'date of birth' ?date
~~~

The default annotation language can be set by a language tag, prepended with `@` on its own line:

~~~example
@gr
?person:
  P31'είναι' Q5'άνθρωπος'
  @en
  P569'date of birth' ?date
~~~

If annotations are checked, the following should be equivalent:

~~~example
?place Len 'Shangri-La'

?place'Shangri-La'@en
~~~

~~~ebnf
AnnotationString ::=  "'" (StringCharacter | EscapedCharacter)* "'"
Annotation       ::=  AnnotationString [ LanguageTag ]
~~~

# Background

Kukulu has been influenced by:

* QuickStatements
* YAML
* Python
* SPARQL
* N3
* ShEX
* Perl (Junctions, Regex)
* Prolog/Datalog (deductive reasoning)
* ...

# Grammar

Formal grammar is work in progress.

~~~ebnf
Script          ::=  ( Expression )*
...
~~~

Unicode codepoints below U+20 are forbidden.

## Syntax diagram

Grammar rules from the current (incomplete!) parser implementation:

<div class="syntax-diagram"></div>

# References

* Wikibase DataModel. <https://github.com/wmde/WikibaseDataModel> (canonical implementation of the database model)
* Wikibase DataModel Serialization. <https://github.com/wmde/WikibaseDataModelSerialization> (JSON format)
* ...
