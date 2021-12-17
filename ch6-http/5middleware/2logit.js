var connect = require('connect');
var util = require('util');

// simple logging middleware
function logit(req, res, next) {
  util.log(util.format('Request received: %s, %s', req.method, req.url));
  next();
}

connect()
  .use(logit)
  .listen(8080);

console.log('server running on port 8080');
