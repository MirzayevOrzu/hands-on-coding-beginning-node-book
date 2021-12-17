var connect = require('connect');

connect()
  .use(function (req, res, next) { next('An error has occured!') })
  .use(function (req, res, next) { res.end('I will never get called') })
  .listen(8080);

console.log('server running on port 8080');
