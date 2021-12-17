var connect = require('connect');

// Create a connect dispatcher and register with http
var app = connect()
  .use(function (req, res, next) { next(); })
  .listen(8080);

console.log('server running on port 8080');
