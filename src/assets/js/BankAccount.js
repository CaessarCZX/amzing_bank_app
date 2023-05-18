export class BankAcount {
  _limitDeposit = 50000;
  _limitWithdrawal = 30000;

  constructor(balance = 0) {
    this._balance = balance;
  }
  get balance() {
    return this._balance;
  }
  get limitDeposit() {
    return this._limitDeposit;
  }
  get limitWithdrawal() {
    return this._limitWithdrawal;
  }
  set limitDeposit(newLimit) {
    newLimit = newLimit < 0 ? this.limitDeposit : newLimit;
    this._limitDeposit = newLimit;
  }
  set limitWithdrawal(newLimit) {
    newLimit = newLimit < 0 ? this.limitDeposit : newLimit;
    this._limitDeposit = newLimit;
  }

  deposit(amount) {
    validation = this.validateDeposit(amount);
    if (validation) {
      this.balance += amount;
    } else {
      return false;
    }
  }
  withdrawal(amount) {
    validation = this.validateWithdrawal(amount);
    if (validation) {
      this.balance -= amount;
    } else {
      return false
    }
  }
  validateDeposit(amount) {
    if (amount < 0 || amount > this.limitDeposit) {
      return false;
    } else {
      return amount
    }
  }

  validateWithdrawal(amount) {
    if (amount >= this.balance && amount < this.limitWithdrawal) {
      return amount;
    } else {
      return false;
    }
  }
}