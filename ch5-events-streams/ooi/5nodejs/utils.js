// util function 
var inherits = require('util').inherits;

// Animal Base class
function Animal(name) {
  this.name = name;
}
Animal.prototype.walk = function (destination) {
  console.log(this.name, ' is walking to ', destination);
}

// Bird Child class
function Bird(name) {
  // Call parent constructor
  Animal.call(this, name);

  // Additional construction code
}

inherits(Bird, Animal);

// Additional member functions
Bird.prototype.fly = function (destination) {
  console.log(this.name, ' is flying to ', destination);
}

var bird = new Bird('Sparrow');
bird.walk('Djambay'); // Sparrow is walking to Djambay
bird.fly('Bulungur'); // Sparrow is flying to Bulungur
