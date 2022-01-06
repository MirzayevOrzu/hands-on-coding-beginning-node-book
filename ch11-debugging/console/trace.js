function foo() {
  console.trace('trace at foo');

  // Execution continues
  console.log('Stack trace is printed');
}

function bar() {
  foo();
}

bar();
