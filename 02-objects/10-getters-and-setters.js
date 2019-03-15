
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0};

  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  this.draw = function() {
    console.log('draw');
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if(!value.x || !value.y) {
        throw new Error('Invalid location');
      }
      defaultLocation = value;
    }
  })
}

const circle = new Circle(10);
circle.defaultLocation = {x: 3, y: 5};
// circle.defaultLocation = 3; // error

console.log(circle.defaultLocation);
