var fs = require('fs');
//File 1
console.log("\n");
console.log("Read file 1");
var data1 = fs.readFileSync("readfile.js");
console.log("Data of file 1:");
console.log(data1.toString());
//File 2
console.log("\n");
console.log("Read file 2");
var data2 = fs.readFileSync("openfile.js");
console.log("Data of file 2:");
console.log(data2.toString());
