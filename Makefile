coverage: istanbul

istanbul:
	istanbul cover --report lcovonly test.js
