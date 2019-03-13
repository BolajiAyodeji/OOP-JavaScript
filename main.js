
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(10);

// for in loop
for (let key in circle) {
  if(typeof circle[key] !== 'function')
  console.log(key, circle[key]);
}

// Object.keys
const keys = Object.keys(circle)
console.log(keys);
keys.map(k => {
  console.log(k, circle[k]);
});

// Object.values
const values = Object.values(circle)
console.log(values);
values.map(v => {
  console.log(v);
});

// Object.entries
const entry = Object.entries(circle)
console.log(entry);
entry.map(items =>{
  let k = items[0];
  let v = items[1];
  console.log(k, v);
});

// In operator
if ('radius' in circle) {
  console.log('Circle has a radius');
}
