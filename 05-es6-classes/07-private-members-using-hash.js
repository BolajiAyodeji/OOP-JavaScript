class Account {
  #balance = 0;
  constructor(name) {
    this.name = name;
  }

  getBalance() {
    console.log(this.#balance);
  }
}

const account = new Account("Alex");
// You can't access private members of a class using the dot operator.
// Only the class itself can access private members.
console.log(account.balance); // undefined
account.getBalance(); // 0
