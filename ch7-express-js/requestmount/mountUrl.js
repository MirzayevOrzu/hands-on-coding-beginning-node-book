var express = require('express');

express()
  .use('/home', function (req, res, next) {
    console.log('first: ', req.url);
    console.log(req.originalUrl);
    next();
  })
  .use(function (req, res, next) {
    console.log('second: ', req.url);
    console.log(req.originalUrl);
    next();
  })
  .listen(8080);

console.log('server running on port 8080');
