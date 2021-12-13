var foo = {
  a: 1,
  b: 'string',
  c: false
}

// convert a JavaScript object to a string
var json = JSON.stringify(foo);
console.log(json);
console.log(typeof json);   // string

// convert a JSON to a JavaScript object
var backToJs = JSON.parse(json);
console.log(backToJs);
console.log(backToJs.a);   // 1
