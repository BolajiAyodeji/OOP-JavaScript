
sayHello() //valid
sayGoodBye() //error

// Function Declaration
function sayHello() {
  console.log('hello');
}

// Function Expression
const sayGoodBye = function() {
  console.log('goodbye')
};

//Function declarations are hoisted [Moved to the top of the JavaScript file
//before runtime and will run first before others]

//Function Expression are not hoisted

//Class Declaration
class Circle {
}

//Class Expression
const square = class {
}

//Class declaration are not hoisted
