var express = require('express');

var app = express()
  .use(function (req, res) {
    console.log('client request cookie header:\n', req.headers.cookie);
    res.cookie('age', 'bas');
    res.end('Cookies');
  })
  .listen(8080);

console.log('server running on port 8080');
