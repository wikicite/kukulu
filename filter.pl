#!/usr/bin/env perl
use v5.14;
use Pandoc::Filter;
use Pandoc::Elements;

pandoc_filter 'CodeBlock.example' => sub {
    [
        Div attributes { class => 'card-body example' },
        [ CodeBlock attributes { class => 'kukulu' }, $_->content ]
    ];
  },
  'CodeBlock.ebnf' => sub {
    [ Div attributes { class => 'card-body ebnf' }, [$_] ];
  },
  'div.TODO' => sub {
    [
        Div attributes { class => 'alert alert-primary' },
        [ Plain [ Strong [ Str "TODO" ] ], @{ $_->content } ]
    ];
  },
  'div.syntax-diagram' => sub {
    my $html = do { local ( @ARGV, $/ ) = 'grammar.html'; <> };

    $html =~ s!.*?</style>!!ms;
    [ Div attributes { class => 'railroad' }, [ RawBlock 'html', $html ] ];
  };
