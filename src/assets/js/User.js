import { BankAcount } from "./BankAccount.js";

export class User {
  constructor(name, lastName, rfc, age, email, phone = 0, password, inicialAmount = 0) {
    this._name = name.toUpperCase();
    this._lastName = lastName.toUpperCase();
    this._rfc = rfc.toUpperCase();
    this._age = age;
    this._email = email;
    this._phone = phone;
    this._password = password;
    this._personalAccount = new BankAcount(inicialAmount);
  }
  get name() {
    return this._name;
  }
  get lastName() {
    return this._lastName;
  }
  get rfc() {
    return this._rfc;
  }
  get age() {
    return this._age;
  }
  get email() {
    return this._email;
  }
  get phone() {
    return this._phone;
  }
  getPassword(permition) {
    return permition ? this._password : null;
  }
  get personalAccount() {
    return this._personalAccount
  }
  ageVerificator(age) {
    age = age < 18 || age < 0 ? false : age;
    return age;
  }
}