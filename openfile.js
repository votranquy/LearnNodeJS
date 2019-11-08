var fs = require('fs');

//Create a stream to read file
var readStream = fs.createReadStream('myfirst.js');
//The event 'open'
readStream.on('open', function(){
    console.log('The file is open');
});
