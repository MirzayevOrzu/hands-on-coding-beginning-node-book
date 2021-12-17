var connect = require('connect');

function parseJSON(req, res, next) {
  if (req.headers['content-type'] === 'application/json') {

    // Load all data
    var readData = '';
    req.on('readable', function () {
      let chunk = req.read();
      readData += chunk || '';
    });

    // Try to parse
    req.on('end', function () {
      try {
        req.body = JSON.parse(readData);
      } catch (e) {
        console.log(e);
      }
      next();
    });
  } else {
    next();
  }
}

connect()
  .use(parseJSON)
  .use(function (req, res) {
    if (req.body) {
      res.end(`JSON parsed! Name is ${req.body.name}`);
    } else {
      res.end('No JSON is detected');
    }
  })
  .listen(8080);

console.log('server running on port 8080');
