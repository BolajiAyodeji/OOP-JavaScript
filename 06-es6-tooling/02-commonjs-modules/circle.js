// Implementation detail
const _radius = new WeakMap();

// Public interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this));
  }
}

module.exports = Circle;
