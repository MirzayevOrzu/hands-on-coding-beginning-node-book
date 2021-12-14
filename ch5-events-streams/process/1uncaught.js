process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
  console.log('Stack: ', err.stack);
  process.exit(1);
});

nonExistentFunc();

console.log('this line will not run');
