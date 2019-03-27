
function Shape() {

}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

function Circle(radius) {
  this.radius = radius;
}

// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor() => new Circle();

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('draw');
}

const s = new Shape();
const c = new Circle(1);
