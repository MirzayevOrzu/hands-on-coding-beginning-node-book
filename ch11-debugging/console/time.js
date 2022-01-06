console.time();
setTimeout(function () {
  console.timeEnd(); // undefined ~500ms
}, 500);

console.time('first');
setTimeout(function () {
  console.timeEnd('first'); // first ~1000ms
}, 1000);

console.time('second');
setTimeout(function () {
  console.timeEnd('second'); // second ~2000ms
}, 2000);
