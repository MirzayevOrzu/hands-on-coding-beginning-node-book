var fs = require('fs');

// write
fs.writeFileSync('core/fs/test.txt', 'Hello fs!');

// read
console.log(fs.readFileSync('core/fs/test.txt').toString());
