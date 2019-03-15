
function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function() {
    this.draw();
    console.log('moving');
  }
}

  // Prototype members
Circle.prototype.draw = function () {
  console.log('draw');
}

const circle1 = new Circle(3);
const circle2 = new Circle(5);

console.log(circle1);
console.log(circle2);

circle1.move();

circle1.toString() // "[object Object]"

// You can change the behaviour of root prototype methods.

Circle.prototype.toString = function() {
  return 'Circle with radius ' + this.radius;
}

console.log(circle1.toString())
// Circle with radius 3
