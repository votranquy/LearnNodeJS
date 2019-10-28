var assert = require('assert');

var x = { a: {n: 0}};
var y = { a: {n: 0}};
var z = { a: {n: '0'}};
// If 2 objects are not equal (both in value and type), throw error and stop the program
// Same with ===
// Not ==
assert.deepStrictEqual(x, y); //OK
assert.deepStrictEqual(x, z, "Not same type"); //Throw Error