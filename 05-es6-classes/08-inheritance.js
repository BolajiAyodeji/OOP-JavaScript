
class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log('moving');
  }
}

class Circle extends Shape{
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log('drawing');
  }
}

const c = new Circle('red', 5);
