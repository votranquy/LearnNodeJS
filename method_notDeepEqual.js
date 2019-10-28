var assert = require('assert');

var x = 5;
var y = 5;
var z = 6;

// Opposite with deepEqual()
//Same with !=
assert.notDeepEqual(x, z);//Ok
assert.notDeepEqual(x, y, "Error message if want"); //Throw Error