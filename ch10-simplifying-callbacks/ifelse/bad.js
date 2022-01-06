// WARNING! DO NOT USE!
function maybeSync(arg, cb) {
  if (arg) {
    // BAD! Do not call synchronously!
    cb('cached data');
  } else { // We need to load data
    // simulate a db load
    setTimeout(function () {
      cb('loaded data');
    }, 500);
  }
}

// Without the intimate details of maybeSync
// it is difficult to find out if
// - foo is called first
// OR
// - bar is called first

maybeSync(true, function (data) {
  foo();
});
bar();

function foo() { console.log('foo'); }
function bar() { console.log('bar'); }
