// To make true copies of data (that break the reference link), 
// you can just create a new object literal as shown below
var foo = { bas: 123 };
var bar = { bas: foo.bas };  // copy

bar.bas = 456;               // change copy
console.log(foo.bas);        // 123, original is unchanged
