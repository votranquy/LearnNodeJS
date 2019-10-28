var assert = require('assert');

//Check if 2 values are equal (==)
assert.equal(50, 50); //ok
assert.equal(50, "50"); //Still OK
assert.equal(50, 70, "Message Error"); //Error