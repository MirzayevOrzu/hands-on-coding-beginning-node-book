// A nonexisting property on a variable returns undefined
var foo = { bar: 123 };
console.log(foo.bar);   // 123
console.log(foo.bas);   // undefined
