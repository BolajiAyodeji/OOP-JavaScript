
// A prototpye is the parent or base of another Object
// Every Object EXCEPT A SINGLE OBJECT has a Prototype and inherits all the actions in its prototype.

let x = {}
console.log(x); // __proto__: Object

// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()


let y = {}
console.log(y); // __proto__: Object

// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// p ropertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()

console.log(Object.getPrototypeOf(x));
console.log(Object.getPrototypeOf(y));

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));
// true
// x and y have the same protoype

console.log(x.__proto__ === y.__proto__);
// true
// This style is deprecated, but you can use in console to debug


// Prototypical Inheritance
// when you access a property or method on an Object, JavaScript engine first checks if the method/property belongs to the Object,
// else it checks the prototype down to the root till it finds it and inherits it.

x.toString();
