var express = require('express');

var app = express()
  .use(function (req, res) {
    res.cookie('name', 'foo');
    res.end('We send you cookie, check it');
  })
  .listen(8080);

console.log('server running on port 8080');
