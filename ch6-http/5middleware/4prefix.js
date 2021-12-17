var connect = require('connect');

function echo(req, res, next) {
  req.pipe(res);
}

connect()
  .use('/echo', echo)
  .use(function (req, res, next) { res.end('Wassup!'); })
  .listen(8080);

console.log('server running on port 8080');
