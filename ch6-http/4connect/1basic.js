var connect = require('connect'),
  http = require('http');

// Create a dispatcher
var app = connect();

// Register with http
http.createServer(app)
  .listen(8080);

console.log('server running on port 8080');
