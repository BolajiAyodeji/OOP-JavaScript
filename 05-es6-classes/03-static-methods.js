
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance method
  draw() {
    console.log('drawing');
  }

  // Static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const c = Circle.parse('{ "radius": 2 }');
console.log(c);

class Math2 {
  static abs(value) {
    // ..
  }
}

Math2.abs
