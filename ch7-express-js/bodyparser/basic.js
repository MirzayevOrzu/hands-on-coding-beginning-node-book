var express = require('express');
var bodyParser = require('body-parser');

var app = express()
  .use(bodyParser({ extended: true }))
  .use(function (req, res) {
    if (req.body.foo) {
      res.end('Body parsed! Value of foo: ' + req.body.foo);
    } else {
      res.end('Body does not have foo');
    }
  })
  .use(function (err, req, res, next) {
    res.end('Invalid body!');
  })
  .listen(8080);

console.log('server running on port 8080');
