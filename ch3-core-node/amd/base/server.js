var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('amd/base/index.html', 'utf8', (err, doc) => {
    console.log(err);
    console.log(doc);
    res.end(doc);
  });
});

server.listen(3000);
console.log('server is listening on port 3000');
