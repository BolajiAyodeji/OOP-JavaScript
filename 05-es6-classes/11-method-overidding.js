
class Shape {
  move() {
    console.log('moving');
  }
}

class Circle extends Shape {
  move() {
    super.move()
    console.log('Circle moving')
  }
}

const c = new Circle();
