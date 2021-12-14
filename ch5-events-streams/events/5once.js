// EventEmitter provides a function `once` 
// that calls the registered listener only once
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.once('foo', function () {
  console.log('foo has been raised');
});

// Emit twice
// The event listener for foo will only be called once.
emitter.emit('foo');
emitter.emit('foo');
