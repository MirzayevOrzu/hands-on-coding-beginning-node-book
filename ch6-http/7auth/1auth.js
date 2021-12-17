var connect = require('connect');

function auth(req, res, next) {
  function send401() {
    res.writeHead(401, { 'WWW-Authenticate': 'Basic' });
    res.end();
  }

  var authHeader = req.headers.authorization;
  if (!authHeader) {
    send401();
    return;
  }

  var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
  var user = auth[0];
  var pass = auth[1];
  if (user == 'foo' && pass == 'bar') {
    next(); // all good
  }
  else {
    send401();
  }
}

connect()
  .use(auth)
  .use(function (req, res) {
    res.end('Authorized!');
  })
  .listen(8080);

console.log('server running on port 8080');
