var express = require('express');

express()
  .use(function (req, res, next) {
    res.end('hello express!');
  })
  .listen(8080);

console.log('server running on port 8080');
