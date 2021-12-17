var http = require('http');
var fs = require('fs');
const { send } = require('process');
const path = require('path/posix');

function send404(response) {
  response.writeHead(404, { 'Content-Type': 'text/plain' });
  response.write('Error 404: Resource not found.');
  response.end();
}

var server = http.createServer(function (request, response) {
  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, 'public/index.html')).pipe(response);
  } else {
    send404(response);
  }
});

server.listen(8080);
console.log('Server is listening on port 8080');
