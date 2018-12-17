#!/usr/bin/env perl
use v5.14;
use Pandoc::Filter;
use Pandoc::Elements;

pandoc_filter 'CodeBlock.example' => sub {
    [
        Div attributes { class => 'Alert' },
        [ Plain [ Strong [ Str "example" ] ], $_ ]
    ];
  },
  'div.example' => sub {
    [
        Div attributes { class => 'Alert' },
        [ Plain [ Strong [ Str "example" ] ], @{ $_->content } ]
    ];
  },
  'CodeBlock.ebnf' => sub {
    [ Div attributes { class => 'Success' }, [$_] ];
  },
  'div.TODO' => sub {
    [
        Div attributes { class => 'Warning' },
        [ Plain [ Strong [ Str "TODO" ] ], @{ $_->content } ]
    ];
  };
