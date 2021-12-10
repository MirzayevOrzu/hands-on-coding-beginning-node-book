console.time('foo1');
var foo1 = require('../base/foo');
console.timeEnd('foo1');   // > 0

console.time('foo2');
var foo2 = require('../base/foo');
console.timeEnd('foo2');   // approx 0
