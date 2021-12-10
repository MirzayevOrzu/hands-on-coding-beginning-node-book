var fs = require('fs');

fs.unlink('core/fs/test.txt', function (err) {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('test.txt successfully deleted!');
  }
});
