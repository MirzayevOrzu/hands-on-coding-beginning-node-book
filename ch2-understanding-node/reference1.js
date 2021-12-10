// JavaScript was designed to be simple and work with limited computer resources. 
// Whenever we assign one variable to another, JavaScript copies a reference to the variable.
var foo = { bas: 123 };
var bar = foo;
bar.bas = 456;
console.log(foo.bas);
