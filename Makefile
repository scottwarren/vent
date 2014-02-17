coverage:
	istanbul
	coveralls

istanbul:
	istanbul cover --report lcovonly test.js

coveralls:
	cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
