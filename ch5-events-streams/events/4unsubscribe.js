var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

var fooHandler = function () {
  console.log('handler called');
}

emitter.on('foo', fooHandler);

emitter.emit('foo'); // handler called
emitter.removeListener('foo', fooHandler);
emitter.emit('foo'); 
