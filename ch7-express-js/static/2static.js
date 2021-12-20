var express = require('express');

var app = express()
  .use(express.static(__dirname + '/public'))
  .listen(8080);

console.log('server listening on port 8080');
