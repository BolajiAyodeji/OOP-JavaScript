
// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function() {
//     console.log('drawing');
//   }
// }

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function() {
      console.log('moving');
    }
  }

  draw() {
    console.log('drawing');
  }
}

const c = new Circle(2);
