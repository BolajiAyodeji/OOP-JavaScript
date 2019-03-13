// ENCAPSULATION
// ABSTRACTION
// INHERITANCE
// POLYMORPHISM

// E N C A P S U L A T I O N
// This is basically grouping related variables and functions that operate on them into Objects

let employee = {
  baseSalary: 30000,
  overTime: 10,
  rate: 20,
  getWage: function() {
    return this.baseSalary + (this.overTime * this.rate);
  }
};
console.log(employee.getWage());
