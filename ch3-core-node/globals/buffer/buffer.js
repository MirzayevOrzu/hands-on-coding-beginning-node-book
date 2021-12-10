// a string
var str = 'Hello Buffer World!';

// From string to buffer
var buffer = Buffer.from(str, 'utf-8');
console.log(buffer);

// From buffer to string
var roundTrip = buffer.toString('utf-8');
console.log(roundTrip); // Hello Buffer World
