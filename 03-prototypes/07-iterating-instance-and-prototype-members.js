
function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function() {;
    console.log('moving');
  }
}

const circle1 = new Circle(3);

// Prototype members
Circle.prototype.draw = function () {
  console.log('draw');
}

console.log(circle1);

// Only returns instance memebers
console.log(Object.keys(circle1));
// (2) ["radius", "move"]


// Returns all members (instance + prototype)
for (let key in circle1) {
  console.log(key);
}
// radius
// move
// draw

let c = circle1.hasOwnProperty('radius'); // true
let d = circle1.hasOwnProperty('draw'); // false

console.log(c)
console.log(d)
