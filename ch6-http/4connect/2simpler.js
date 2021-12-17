var connect = require('connect');

// Create a connect dispatcher and register with http
var app = connect()
  .listen(8080);

console.log('server running on port 8080');
