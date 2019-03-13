
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const circle = new Circle(1);

console.log(
  Circle.name,
  Circle.length,
  Circle.constructor,
  Circle.call({}, 1, 2, 3),
  Circle.apply({}, [1, 2 , 3]),


);

const Circle2 = new Function('radius', `
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
`);
const circle2 = new Circle2(3);
