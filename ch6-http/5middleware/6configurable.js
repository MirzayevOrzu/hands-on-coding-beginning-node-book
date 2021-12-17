var connect = require('connect');

// Configurable middleware creator
function greeter(message) {
  return function (req, res, next) {
    res.end(message);
  }
}

var helloWorldGreeter = greeter('Hello World');
var heyThereGreeter = greeter = greeter('Hey There');

connect()
  .use('/hello', helloWorldGreeter)
  .use('/hey', heyThereGreeter)
  .listen(8080);

console.log('server running on port 8080');
