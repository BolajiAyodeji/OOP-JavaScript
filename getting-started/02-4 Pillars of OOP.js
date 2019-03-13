// ENCAPSULATION
// ABSTRACTION
// INHERITANCE
// POLYMORPHISM

// E N C A P S U L A T I O N
// In OOP, we group related variables and functions that operate on them into Objects

let baseSalary = 30_000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
  return baseSalary + (overTime * rate)
}
