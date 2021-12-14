// Animal Base class
function Animal() {

}
Animal.prototype.walk = function () {
  console.log('walking');
}

// Bird Child class
function Bird() {

}
Bird.prototype = Object.create(Animal.prototype, {
  constructor: {
    value: Bird,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

var bird = new Bird();
bird.walk(); // walking
console.log(bird.constructor === Bird);  // true
