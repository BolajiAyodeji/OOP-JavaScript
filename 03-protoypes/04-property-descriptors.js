
let person = { name: 'Bolaji' };
console.log(person);

for (let key in person) {
  console.log(key, person[key])
}

console.log(Object.keys(person));

// In JavaScript our properties have attributes attached to them and this sometimes prevent them from being enumerated.

let objectBase = Object.getPrototypeOf(person)
let descriptor1 = Object.getOwnPropertyDescriptor(objectBase, 'toString');
// configurable: true
                     // enumerable: false
// value: ƒ toString()
// writable: true
// __proto__: Object

let descriptor2 = Object.getOwnPropertyDescriptor(person, 'name');
// configurable: true
                    // enumerable: true
// value: "Bolaji"
// writable: true
// __proto__: Object

console.log(descriptor1);
console.log(descriptor2);

//////////////////////////////////////////////

Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false,
  configurable: false
})
person.name = 'Bale'; // won't work
delete person.name // won't work
Object.keys(person) // won't work

console.log(person)

