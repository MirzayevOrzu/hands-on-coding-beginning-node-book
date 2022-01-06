var foo = {
  bar: 123,
  inspect: function () {
    return 'Bar is ' + this.bar;
  }
}

// Did not work as expected
// Inspect
console.log(foo); // => Bar is 123
