.PHONY: build watch clean install
default: build

TYPESCRIPT_VERSION=2.0.7
INSTALL_DIR=./node_modules/typescript/bin/
TSC=$(INSTALL_DIR)tsc
	
install:
	npm install --save-dev typescript@$(TYPESCRIPT_VERSION)

build:
	$(TSC)

watch:
	$(TSC) --watch

clean:
	rm -rf ./build
