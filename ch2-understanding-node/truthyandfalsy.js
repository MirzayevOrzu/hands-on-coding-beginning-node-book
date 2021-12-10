console.log(null == undefined);  // true
console.log(null === undefined); // false

// Are there all falsy?
if (!false) {
  console.log('falsy');
}

if (!null) {
  console.log('falsy');
}

if (!undefined) {
  console.log('falsy');
}
