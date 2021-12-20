var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
  .use(cookieParser())
  .use('/toggle', function (req, res) {
    if (req.cookies.name) {
      res.clearCookie('name');
      res.end('name cookie cleared!');
    } else {
      res.cookie('name', 'foo');
      res.end('name cookie set!');
    }
  })
  .use(function (req, res) {
    console.log(req.cookies);
    res.end('Hello');
  })
  .listen(8080);

console.log('server running on port 8080');
