var express = require('express');
var timeout = require('connect-timeout');

var app = express()
  .use(timeout(5000))
  .use(function (req, res, next) {
    // simulate database action that takes 6s
    setTimeout(function () {
      next();
    }, 6000);
  })
  .use(function (req, res, next) {
    console.log('here');
    res.end('Done'); // Error: Request already terminated
  })
  .listen(8080);

console.log('server running on port 8080');
