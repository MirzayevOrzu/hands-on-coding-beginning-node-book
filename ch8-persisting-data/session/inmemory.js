var express = require('express');
var expressSession = require('express-session');

var app = express()
  .use(expressSession({
    secret: 'my super secret sign key',
    resave: true,
    saveUninitialized: true
  }))
  .use('/home', function (req, res) {
    if (req.session.views) {
      req.session.views++;
    }
    else {
      req.session.views = 1;
    }
    res.end('Total views for you: ' + req.session.views);
  })
  .use('/reset', function (req, res) {
    delete req.session.views;
    res.end('Cleared all your views');
  })
  .listen(8080);
console.log('server running on port 8080');
