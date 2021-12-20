var express = require('express');
var timeout = require('connect-timeout');

var app = express()
  .use('/api', timeout(5000),
    function (req, res) {
      // do nothing to simulate hanging request
    }
  )
  .listen(8080);

console.log('server running on port 8080');
