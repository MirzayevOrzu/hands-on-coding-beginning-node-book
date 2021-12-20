var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
  .use(cookieParser())
  .use(function (req, res) {
    if (req.cookies.name) {
      console.log('User name: ', req.cookies.name);
    } else {
      res.cookie('name', 'foo');
    }
    res.end('Cookies');
  })
  .listen(8080);

console.log('server running on port 8080');
