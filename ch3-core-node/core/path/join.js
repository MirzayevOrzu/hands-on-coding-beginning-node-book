var path = require('path');

// logs on Unix: foo/bar/bas
// logs on Windows: foo\bar\bas
console.log(path.join('public', 'images', '/background', 'windows10.png'));
