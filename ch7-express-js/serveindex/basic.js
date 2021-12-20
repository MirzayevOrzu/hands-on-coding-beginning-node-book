var express = require('express');
var serveIndex = require('serve-index');

var app = express()
  .use(express.static(__dirname + '/public'))
  .use(serveIndex(__dirname + '/public'))
  .listen(8080);

console.log('server running on port 8080');
