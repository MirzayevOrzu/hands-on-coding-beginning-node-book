var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
  .use(cookieParser('secure secret sign key'))
  .use('/toggle', function (req, res) {
    if (req.signedCookies.name) {
      console.log(req.signedCookies.name);
      res.clearCookie('name');
      res.end('name cookie cleared');
    } else {
      res.cookie('name', 'foo', { signed: true });
      res.end('name cookie set!');
    }
  })
  .listen(8080);

console.log('server running on port 8080');
