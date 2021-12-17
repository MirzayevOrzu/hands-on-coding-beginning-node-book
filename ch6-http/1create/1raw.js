var http = require('http');

var server = http.createServer(function (request, response) {
  console.log('request starting...');

  // response
  response.write('Hello client!');
  response.end();

});

server.listen(8080);
console.log('Server is listening on port 8080');
