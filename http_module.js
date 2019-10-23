var http = require('http');

http.createServer(function(req, res){
    res.write("Good afternoon!!!!");
    res.end();
}).listen(8080);