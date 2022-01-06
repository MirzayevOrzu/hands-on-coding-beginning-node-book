// %d and %s
var name = 'Abdulloh';
var age = 33;
console.log('%s is %d years old', name, age);

// %j
var foo = {
  answer: 8
}
console.log(foo);        // { answer: 8 }
console.log('%j', foo);  // { "answer": 8 }
