HTML_OPTIONS=--css style.css --toc -F filter.pl --template=GitHub.html5
WIKI_OPTIONS=

default: kukulu.html kukulu.txt

kukulu.html: kukulu.md
	pandoc -s $(HTML_OPTIONS) $< -o $@

kukulu.txt: kukulu.md
	pandoc -s -t mediawiki $(WIKI_OPTIONS) $< -o $@
