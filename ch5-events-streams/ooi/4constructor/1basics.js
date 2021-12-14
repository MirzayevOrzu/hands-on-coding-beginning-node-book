// By default, every function gets a member called `prototype`, which we have already seen. 
// By default, this member has a constructor property that points to the function itself.
function Foo() { }
console.log(Foo.prototype.constructor === Foo); // true
