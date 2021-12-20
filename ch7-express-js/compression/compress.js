var express = require('express');
var compression = require('compression');

var app = express()
  .use(compression())
  .use(express.static(__dirname + '/public'))
  .listen(8080);

console.log('server running on port 8080');
