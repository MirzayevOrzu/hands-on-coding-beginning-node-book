var express = require('express');
var serveStatic = require('serve-static');

var app = express()
  .use(serveStatic(__dirname + '/public'))
  .listen(8080);

console.log('server listening on port 8080');
