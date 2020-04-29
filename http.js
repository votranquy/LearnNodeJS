var http = require('http');

http.createServer(function (request, response) {
  response.write('Hello you!');
  response.end();
}).listen(8000);