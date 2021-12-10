// Class definition
function someClass() {
  // Properties go here:
  this.someProperty = 'initial value';
}

// Member function go here:
someClass.prototype.someMemberFunction = function () {
  // Do something using this
  this.someProperty = 'modified value';
}

// Creation
var instance = new someClass();

// Usage
console.log(instance.someProperty);   // initial value
instance.someMemberFunction();
console.log(instance.someProperty);   // modified value
