var foo = require('./foo');

// create a new object
var obj = foo();

// use it 
obj.something = 456;
console.log('obj.something in app.js modified ', obj.something);

var bar = require('./bar');
