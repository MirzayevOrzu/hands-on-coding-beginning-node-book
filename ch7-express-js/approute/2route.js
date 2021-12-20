var express = require('express');

var app = express();

app.route('/')
  .all(function (req, res, next) {
    res.write('all\n');
    next();
  })
  .get(function (req, res) {
    res.end('get');
  })
  .put(function (req, res) {
    res.end('put');
  })
  .post(function (req, res) {
    res.end('post');
  })
  .delete(function (req, res) {
    res.end('delete');
  });

app.listen(8080);

console.log('server running on port 8080');
