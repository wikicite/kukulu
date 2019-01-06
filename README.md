This repository contains the draft of a Wikibase data language called **Kūkulu** and an implementation of a parser.

[![Build Status](https://travis-ci.org/wikicite/kukulu.svg?branch=master)](https://travis-ci.org/wikicite/kukulu)

Source code and issue tracker are available at <https://github.com/wikicite/kukulu>.

*This is an early, incomplete draft!*

## Specification

Current document at <http://wikicite.org/kukulu/>.

## Implementation

A parser in NodeJS is included in the code repository. It includes the command line client `kukulu`.

Install from source:

    $ npm install -g .

Try out

    $ kukulu
    $ kukulu 'Q1 P2 Q3'

