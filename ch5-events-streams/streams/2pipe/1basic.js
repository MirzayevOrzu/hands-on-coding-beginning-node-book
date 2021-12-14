var fs = require('fs');
const path = require('path/posix');

// Create readable stream
var readableStream = fs.createReadStream(path.join(__dirname, 'cool.txt'));

// Pipe it to stdout
readableStream.pipe(process.stdout);
