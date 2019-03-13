
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(10);
console.log(circle);

// ADD
circle.location = {x: 1, y: 2};

const propName = 'location2';
circle[propName] = {x: 1, y: 2};

// DELETE
delete circle.location;

delete circle['location2'];
