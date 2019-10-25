var fs = require('fs');
var readStream = fs.createReadStream('myfirst.js');

readStream.on('open', function(){
    console.log('The file is open');
});