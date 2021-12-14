// Animal Base class
function Animal(name) {
  this.name = name;
}
Animal.prototype.walk = function (destination) {
  console.log(this.name, ' is walking to ', destination);
}

var animal = new Animal('Camel');
animal.walk('Samarkand'); // Camel is walking to Samarkand

// Bird Child class
function Bird(name) {
  Animal.call(this, name);
}
Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype.fly = function (destination) {
  console.log(this.name, ' is flying to ', destination);
}

var bird = new Bird('Sparrow');
bird.walk('Tashkent'); // Sparrow is walking to Tashkent
bird.fly('Bukhara'); // Sparrow is flying to Bukhara
