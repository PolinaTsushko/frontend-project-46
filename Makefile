publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js

lint:
	npm install -g eslint

test:
	npx jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8

