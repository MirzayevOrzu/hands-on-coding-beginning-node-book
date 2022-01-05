var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo');

var db = mongoose.connection;

db.on('error', function (err) { throw err });
db.once('open', function callback() {
  console.log('connected!');
  db.close();
});
