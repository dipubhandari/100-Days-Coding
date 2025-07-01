console.log("Ecapsultation");

class BankAccount {
  #balance;

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient fund");
    }
  }
  getBalance() {
    return this.#balance;
  }
}

const account1 = new BankAccount("Dipendra", 1000);
console.log(account1.getBalance());
account1.withdraw(500);
console.log(account1.getBalance());
account1.deposit(60000);
console.log(account1.getBalance());
