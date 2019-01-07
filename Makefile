HTML_OPTIONS=--css style.css --toc -F filter.pl --template=GitHub.html5
WIKI_OPTIONS=

.PHONY: grammar.html

default: grammar.html kukulu.html kukulu.txt grammar.txt

grammar.html:
	npm run diagram

kukulu.html: kukulu.md grammar.html
	pandoc -s $(HTML_OPTIONS) $< -o $@

kukulu.txt: kukulu.md
	pandoc -s -t mediawiki $(WIKI_OPTIONS) $< -o $@

grammar.txt: kukulu.md
	./ebnf.pl $< > $@
