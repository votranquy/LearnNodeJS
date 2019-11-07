const http = require('http');
let {requestListener} = require('./callbackFile.js');
const PORT = process.env.PORT || 3000;
const server = http.createServer(requestListener);
server.listen(PORT);
