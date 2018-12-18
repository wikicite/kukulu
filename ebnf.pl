#!/usr/bin/env perl
use v5.14;
use Pandoc;

binmode STDOUT, ':encoding(UTF-8)';

pandoc->file( shift @ARGV )->walk(
    'CodeBlock.ebnf' => sub {
        say "\n" . $_->content;
    }
  )
