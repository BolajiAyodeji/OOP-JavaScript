
const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }
  [_draw]() {
    console.log('drawing')
  }
}

const c = new Circle(3);
