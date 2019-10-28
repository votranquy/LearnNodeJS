var assert = require('assert');
var x = { a: {n: 0} };
var y = { a: {n: 0} };
var z = { a: {n: 1} };
// If 2 variable are equal -> throw an error and stop program
assert.deepEqual(x, y);
assert.deepEqual(x, z, "Throw Error");