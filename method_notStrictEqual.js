var assert = require('assert');

assert.notStrictEqual(50, 70);//ok
assert.notStrictEqual(50, "50", "Message Message");//ok
assert.notStrictEqual(50, 50, "Error Message Message");//Error