all: deploy

build:
	pxt build
	
 pxt bump [--update] [--upload]


deploy:
	pxt deploy

test:
	pxt test
	
