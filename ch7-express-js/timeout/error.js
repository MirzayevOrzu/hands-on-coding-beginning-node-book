var express = require('express');
var timeout = require('connect-timeout');

var app = express()
  .use('/api', timeout(5000),
    function (req, res, next) {
      // do nothing to simulate hanging request
    },
    function (err, req, res, next) {
      if (req.timedout) {
        res.statusCode = 500;
        res.end('Request time out!');
      } else {
        next(error);
      }
    }
  )
  .listen(8080);

console.log('server running on port 8080');
