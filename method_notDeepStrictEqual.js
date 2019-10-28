var assert = require('assert');

var x = 5;
var y = 5;
var z = '5';

assert.notDeepStrictEqual(x, z);
assert.notDeepStrictEqual(x, y, "Error Message");