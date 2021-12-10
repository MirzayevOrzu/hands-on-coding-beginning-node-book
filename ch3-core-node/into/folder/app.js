var foo = require('./something/foo');
var bar = require('./something/bar');
var bas = require('./something/bas');
var qux = require('./something/qux');

// import entire folder instead

var something = require('./something');
// something = { foo, bar, bas, qux }