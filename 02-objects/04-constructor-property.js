
// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  };
}
const circleFac = createCircle(1);
console.log(circleFac.constructor);
// Check console

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const circleCon = new Circle(1);
console.log(circleCon.constructor);
// Check console


// Other properties
new String() // '', "", ``
new Boolean() // true, false
new Number() // 1, 2, 3, ...
