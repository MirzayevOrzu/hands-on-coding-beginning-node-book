var util = require('util');
var name = 'Orzu';
var money = 1000000000000;

// prints Orzu has spent $1000000000000 dollars for good deeds with right intention
console.log(util.format('%s has spent $%d dollars for good deeds with right intention', name, money));
