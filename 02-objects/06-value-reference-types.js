
// Value types (Primitives)
Number
String
Boolean
Symbol
undefined
null

// Reference types
Object
Function
Array

///////////////////////////////

let a = 10;
let b = a;
a = 20;
console.log(a, b);


let c = {value: 10};
let d = c;
c.value = 20;
console.log(c, d);

////////////////////////////////

let num = 10;

function increase(num) {
  num++
}
increase(num);
console.log(num);


let obj = {value: 10};

function increase(obj) {
  obj.value++
}
increase(obj);
console.log(obj)

// Primitives are copied by their value
// Objects are copied by their reference
