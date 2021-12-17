var http = require('http');
var fs = require('fs');
const path = require('path');

function send404(response) {
  response.writeHead(404, { 'Content-Type': 'text/plain' });
  response.write('Error 404: Resource not found.');
  response.end();
}

var mimeLookup = {
  '.js': 'application/javascript',
  '.html': 'text/html'
}

var server = http.createServer(function (request, response) {

  if (request.method === 'GET') {

    // resolve file path to filesystem path
    var fileURL;
    if (request.url == '/') fileURL = '/index.html';
    else fileURL = request.url
    var filePath = path.resolve('./public' + fileURL);

    // lookup mime type
    var fileExt = path.extname(filePath);
    var mimeType = mimeLookup[fileExt];
    if (!mimeType) {
      send404(response);
      return;
    }

    // see if we have that file
    fs.exists(filePath, function (exists) {

      // if not 
      if (!exists) {
        send404(response);
        return;
      }

      // finally stream the file
      response.writeHead(200, { 'Content-Type': mimeType });
      fs.createReadStream(filePath).pipe(response);
    });
  } else {
    send404(response);
  }
});

server.listen(8080);
console.log('Server is listening on port 8080');
