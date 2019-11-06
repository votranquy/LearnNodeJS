const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingFile.txt')
});

const fileStream = fs.createWriteStream('shoppingResult');

let transformData = (line) => {
  fileStream.write(`They were out of: ${line}\n`);
}

myInterface.on('line', transformData);
