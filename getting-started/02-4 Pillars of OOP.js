// ENCAPSULATION
// ABSTRACTION
// INHERITANCE
// POLYMORPHISM

// E N C A P S U L A T I O N
// This is basically grouping related variables and functions that operate on them into Objects.

let employee = {
  baseSalary: 30000,
  overTime: 10,
  rate: 20,
  getWage: function() {
    return this.baseSalary + (this.overTime * this.rate);
  }
};
console.log(employee.getWage());

// A B S T R A C T I O N
// Helps to reduce the impact of change, hides complexity and chuns a simpler interface.

// I N H E R I T A N C E
// A mechanism that helps to eliminate redundant code.

// P O L Y M O R P H I S M
// Poly means many, morphism mean forms
// A technique that helps to get ride of long if and else statements and switch cases.
