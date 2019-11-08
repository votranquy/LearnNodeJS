var fs = require("fs");

//Callback function 1
function readFinish1(err, data){
  if(err) console.log(err);
  console.log("Data 1:");
  console.log(data.toString());
}

//Callback function 2
function readFinish2(err, data){
  if(err) console.log(err);
  console.log("Data 2:");
  console.log(data.toString());
}

//Read file 1
console.log("\n");
console.log("Read file 1");
fs.readFile('openfile.js', readFinish1);

//Read file 2
console.log("\n");
console.log("Read file 2");
fs.readFile('readfile.js', readFinish2);

//end
console.log("\n");
console.log("Program Ended!!!\n");
