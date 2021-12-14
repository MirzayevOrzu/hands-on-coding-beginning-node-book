var fs = require('fs');
var gzip = require('zlib').createGzip();
var path = require('path');

var inp = fs.createReadStream(path.join(__dirname, 'cool.txt'));
var out = fs.createWriteStream(path.join(__dirname, 'cool.txt.gz'));

// Pipe chain
inp.pipe(gzip).pipe(out);
