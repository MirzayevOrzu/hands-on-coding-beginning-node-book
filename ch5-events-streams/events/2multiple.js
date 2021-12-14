// one of the advantages of using events 
// is having built-in support for multiple subscribers 
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('foo', function () {
  console.log('subscriber 1');
});

emitter.on('foo', function () {
  console.log('subscriber 2');
});

// Emit
emitter.emit('foo');
