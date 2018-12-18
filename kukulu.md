---
title: Kukulu
subtitle: A data language for Wikibase
date: 2018-12-18
---

::: Warning
This document contains no official, established, or final specification but
a request for comments. See <https://github.com/wikicite/kukulu> for source
code and issue tracker.
:::

# Introduction

**Kukulu** (named after the Hawaiian word *kūkulu*: to build, construct) is a formal language to express, query, and model data in the database model of [Wikibase]. Wikibase is primarily known for the knowledge base [Wikidata]. Its [database model] has official serializations in JSON and in RDF. Kukulu defines an alternative [serialization] with extensions to express [queries] and [rules].

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

An feature possible on each level is the optionl support of [annotations].

## Limitations

The current draft of Kukulu does not fully support the following elements that might be considered part of the Wikibase database model. Support may be added sooner or later:

* MediaWiki revision ids and timestamps
* namespace ids
* badges
* claim identifiers
* reference hashes

The [query language] is more limited than SPARQL but easier for small queries. The [rule language] requires additional discussion.

# Background

## Database model
[database model]: #database-model

The **database model of Wikibase** (also referred to as *conceptual data model of Wikibase*) is [implemented canonically in PHP](https://github.com/wmde/WikibaseDataModel) and [described at MediaWiki.org](https://www.mediawiki.org/wiki/Wikibase/DataModel). The model is most visible through the Wikibase user interface. This specification assumes basic knowledge of the Wikibase database model and its terminology.

A good starting point to learn about the Wikibase database model in practice is the [Wikidata introduction] and help pages such as [Help:Items], [Help:Statements], and [Help:Lexemes]. The best way to get familiar with data in Wikibase is contributing to Wikidata.

[Wikidata introduction]: https://www.wikidata.org/wiki/Wikidata:Introduction
[Help:Items]: https://www.wikidata.org/wiki/Help:Items
[Help:Statements]: https://www.wikidata.org/wiki/Help:Statements
[Help:Lexemes]: https://www.wikidata.org/wiki/Help:Lexemes

## Data bindings

Official serializations of the Wikibase database model exist [in JSON](https://www.mediawiki.org/wiki/Wikibase/DataModel/JSON) and [in RDF](https://www.mediawiki.org/wiki/Wikibase/DataModel/RDF). Data bindings in addition to the PHP sources are available as part of programming libraries at least in JavaScript ([wikidata-sdk]), Java ([Wikidata Toolkit]), Python ([Wikidata for Python]), and .NET ([Wiki Client Library]).

Serializations in addition to the official JSON and RDF syntax exist as part of the tools [QuickStatements], [GraphQL API], and [wikidata-cli].

[QuickStatements]: https://www.wikidata.org/wiki/Help:QuickStatements
[GraphQL API]: https://tools.wmflabs.org/tptools/wdql.html

[wikidata-sdk]: https://www.npmjs.com/package/wikidata-sdk
[wikidata-cli]: https://www.npmjs.com/package/wikidata-cli
[Wikidata Toolkit]: https://www.mediawiki.org/wiki/Wikidata_Toolkit
[Wikidata for Python]: https://pypi.org/project/Wikidata/
[Wiki Client Library]: https://github.com/CXuesong/WikiClientLibrary

## Query and rule languages

* SPARQL (see [Wikidata query service])
* [ShEX for Wikidata](https://www.wikidata.org/wiki/Wikidata:WikiProject_ShEx),
* [GraphQL API]
* Programming libraries

[Wikidata query service]: https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service

# Data types
[data type]: #data-types

This section describes how to reference elements of the Wikibase database model in Kukulu syntax.

## Entities

**Entities** (Items, Properties, Lexemes, Senses, and Forms) are referened by their plain ID:

~~~example
Q42		# an item
P31		# a property
L7		# a lexeme
L7-S1	# a sense
L7-F4	# a form
~~~

~~~ebnf
IdNumber        ::=  [1-9] [0-9]*
ItemId          ::=  'Q' IdNumber
PropertyId      ::=  'P' IdNumber
LexemeId        ::=  'L' IdNumber
SenseId         ::=  LexemeId '-' 'S' IdNumber
FormId          ::=  LexemeId '-' 'S' IdNumber
~~~

Entities can always be followed by an [annotation](#annotation).

## Value data types

All [**data types**](https://www.wikidata.org/wiki/Help:Data_type) are reserved words. Some of data type names differ from Wikibase ontology for abbreviation.

~~~example
?entity    an  Item|Property|Lexeme|Sense|Form
?text      a   String|Text
?formular  a   Math
?time      a   Time
?coord     a   Coordinate	# = wikibase:GlobeCoordinate
?shape     a   Shape		# = wikibase:GeoShape
?amount    a   Quantity
?id        an  Id			# = wikibase:ExternalId
?url       an  Url
?file      a   Media	    # = wikibase:CommonsMedia
?data      a   Tabular		# = wikibase:TabularData
~~~

### String
[strings]: #string

Strings (reserved word `String`) can be expressed quoted by double quotes (`'...'`) or by simple quotes (`'...'`). Unquoted strings are possible following `: ` or `:=` if they start with a letter or digit and don't contain the character sequence ` #`.

::: TODO
Define quoting and escaping rules (like JSON, like CSV and/or like QuickStatements, ...?)
:::

### Monolingual text

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

### External identifier

External identifiers (reserved word `Id`) are expressed as [strings]. To explicitly state that an identifier is not a string use a condition its type:

~~~example
"foo"
"12345" an Id
~~~

~~~ebnf
ExternalId      ::=  String
~~~

### Mathematical expression

Mathematical expressions (reserved word `Math`) are expressed as [strings]. To explicitly state that a mathematical expression is not a string use a condition on its type.

~~~example
"e^{i \pi} + 1 = 0" 
"e = mc^2" a Math
~~~

~~~ebnf
MathExpression  ::=  String
~~~

### URLs 

Values of data type `URL` can be expressed as [strings] or unqoted URLs.

~~~example
"https://www.wikidata.org/"
https://www.wikidata.org/
//example.org
~~~

:::TODO
Specifiy regular expression to detect unquoted URLs
:::

### Times

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

~~~
- time: 2013  # value of type Time with time set to +2013-00-00T00:00::Z and precision 9
- 2013        # value of type Quantity
~~~

:::TODO
Add formal syntax
:::

### Quantity

Values of data type `Quantity` are represented with its attributes `amount`, `lowerBound`, `upperBound`, and `unit` (see Wikibase [database model] for details). The attributes `lowerBound` and `upperBound` are optional and have no default values. The attribute `unit` is optional with the special default value `1` and data type [item] otherwise.

~~~{.example .yaml}
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
QuantityValue   ::=  Number Tolerance? Unit?
Number          ::=  Decimal Exponent?
Decimal         ::=  [+-]? ( [0-9]+ '.' [0-9]* | '.' [0-9]+ )
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

### Coordinate

Values of data type geographic coordinate (reserved word `Coordinate`) are represented with its attributes `latitude`, `longitude`, `precision`, and `globe`. (see Wikibase [database model] for details). The `globe` is a value of type [item] and set to [Q2] by default.

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

### Lexeme

Lexemes have attributes `lemmas`, `category`, `language`, `claims`, `senses`, and `forms`.

~~~example
L7:
  lemmas:
    en: cat
  category: Q1084   # abbreviated from "lexicalCategory"
  language: Q1860
  ...
  # TODO: exemplify senses and forms
~~~

### Sense

...

### Form

...

### Media

Values of data type commons media (reserved word `Media`) ...

### Tabular

Values of data type tabular data (reserved word `Tabular`) ...

### Shape

Values of data type geographic shape (reserved word `Shape`) ...

## Language tags
[language tag]: #language-tags

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

## Sets

Sets can be defined by [set variables] and [set operators].

::: example

> extended type constraint on property P26: if A is spouse of B, then both must
> be instance of human, fictional character, person, or mythical character

    ?A P26 ?B  =>  ?A & ?B  P31  Q5 | Q95074 | Q215627 | Q4271324

	# equivalent with prefix set operators:

    ?A P26 ?B => all(?A ?B) P31 any(Q5 Q95074 Q215627 Q4271324)

:::

## Ranges

String, Time, and Quantity can be combined to ranges:

    "a"..."z"
    1901-01-01...2000-12-31
    1...42  

Indiviual values can be checked whether they are part of a range, for instance:

    ?date in 1901-01-01...2000-12-31

is equivalent to

    ?date >= 1901-01-01
    ?date <= 2000-12-13


# Serialization
[serialization language]: #serialization


Entities with their labels, aliases, claims etc. can be serialized in [key-value form], in [line-based form], and [mixed form].

## Key-value form
[Key-value form]: #key-value-form
[key-value form]: #key-value-form

The **key-value form** is inspired by [YAML] (but differs in several ways).

~~~{.example .yaml}
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

~~~{.example .yaml}
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

~~~{.example .yaml}
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

**Ranks** can be expressed with `!` (preferred rank), `~` (deprecated rank), and `*` (any rank) preprending a property:

    ?person P463 ?organization      # truthy member-of (default)
    ?person ~P463 ?organization     # deprecated member-of
    ?person !P463 ?organization     # preferred member-of (all statements)
    ?person *P463 ?organization     # member-of (all statements)

## &&

Can be used to merge lines.

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

See [sets] and [set operators] for extended usage of set variables.

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

Some data types can be converted to each other, e.g.

* `Time("2018-12-31") == 2018-12-31`

## Assignments

    ?instance-of := P31
    ?+instace-or-subclass-of := P31 | P279

This corresponds to `BIND` in SPARQL.

## Statements

Simple statements can be expressed in QuickStatements syntax extended by variables:

    ?human P31  Q5          # variable item, property, value
    ?human P569 1952-03-11  # same with date as value
    Q42 P27 ?               # country of citizenship (value not bound to variable)
    ? ? ?                   # all possible statements

Property path inspired by SPARQL are useful:

    ?work P50 ? =>                  # if item has an author 
        ?work P31/P279* Q17537576   # then it must be subclass of creative work

# Rules
[rule language]: #rules

**Constraints** can be expressed with [rule operators].

    ?work P50 ?  => ...             # if item has an author 

    # all items must be instance of subclass of something
    ?item an Item => ?item P31|P279 ?

	# in contrast
    ?item P31|P279 ?   # an item that is an instance or subclass of something

# Operators

## equality

    ==
    !=

Equality operators make heavy use of type coercion.

## comparision

    >
    >=
    <
    <=
	
## regular expression

	=~
	!~

## a / an

The operator `a` or its alias `an` can be used as shortcut to test the [data type] of an element:

~~~example
?s  a  String  <=>  ?s.type  == String
?x  an Item    <=>  ?x.type  == Item
?id an Id|Url  <=>  ?id.type == Id|Url
~~~

## Set operators

Infix [set](#set) operators:

	... | ... | ...
	... & ... & ...
	... in ...

Prefix set operators:

	any( ... )
	all( ... )

<div class="example">

> Short names of entities (acronyms, abbreviations etc.) should also be aliases

~~~
?entity P1813"short name" ?name =>
  ?name in ?entity.aliases
~~~

</div>


## rule operators

    =>	 # material implication (if...then... / ...implies...)
    then # alias

	<=>  # biconditional (...if and only if...)
    iff  # alias

Rules can also be written with keywords `if`, `then`, `else`, `unless`, `case`...

See also [sets] for OR-clauses.

# Annotations

An entity or variable can *directly* be followed by a string:

~~~example
?person:
  P31"instance of" Q5"human"
  P569"date of birth" ?date
~~~

Applications can choose to ignore annotations, translate annotations, and/or check whether annotations match entity labels/lemmas.

Annotations can have languages: 

~~~example
?person:
  P31"είναι"@gr Q5"Mensch"@de
  P569"date of birth" ?date
~~~

The default annotation language can be set by a language tag, prepended with `@` on its own line:

~~~example
@gr
?person:
  P31"είναι" Q5"άνθρωπος"
  @en
  P569"date of birth" ?date
~~~

If annotations are checked, the following should be equivalent:

~~~example
?place Len "Shangri-La"

?place"Shangri-La"@en
~~~

~~~ebnf
Annotation      ::=  QuotedString [ LanguageTag ]
~~~

# Background

Kukulu has been influenced by:

* QuickStatements
* YAML
* SPARQL
* N3
* ShEX
* Perl 6 (Junctions)
* Prolog/Datalog (deductive reasoning)
* ...

# Grammar

Formal grammar is work in progress. EBNF rules from this document are collected in file [grammar.txt](grammar.txt).

# References

* Wikibase DataModel. <https://github.com/wmde/WikibaseDataModel> (canonical implementation of the database model)
* Wikibase DataModel Serialization. <https://github.com/wmde/WikibaseDataModelSerialization> (JSON format)
* ...
