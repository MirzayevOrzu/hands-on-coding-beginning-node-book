var https = require('https');

https.createServer(function (req, res) {
  res.end('hello client!');
}).listen(8080);

console.log('server running on port 8080');
