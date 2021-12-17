var connect = require('connect');

connect()
  .use(function (req, res, next) { next(new Error('Big bad error occured!')) })
  .use(function (req, res, next) { res.end('I will never get called') })
  .use(function (err, req, res, next) {
    // Log the error on the server
    console.log('Error: ', err);

    // inform the client
    res.writeHead(500);
    res.end('Unable to process the request');
  })
  .listen(8080);

console.log('server running on port 8080');
