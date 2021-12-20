var express = require('express');

var app = express();

app.get('/users/:userId', function (req, res) {
  res.send('userId is: ' + req.params['userId']);
});

app.listen(8080);

console.log('server running on port 8080');
