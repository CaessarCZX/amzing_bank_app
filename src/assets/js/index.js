// Session storage variables
class BankAcount {
    _limitDeposit = 50000;
    _limitWithdrawal = 30000;

    constructor(balance = 0) {
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    set limitDeposit(newLimit) {
        this._limitDeposit = newLimit;
    }

    deposit() {

    }
    withdrawal() {

    }

    validateDeposit(amount) {
        
    }

    validateWithdrawal() {

    }
}

class User {
    constructor(name, lastName, rfc, age, email, phone = 0, password, inicialAmount = 0) {
        this._name = name;
        this._lastName = lastName;
        this._rfc = rfc;
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
}


const initMenu = () => {
    const openMenu = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close-menu');
    const menuActivator = document.getElementById('menu-activator');
    const reactiveMenu = 'active-wrap-menu';

    openMenu.addEventListener('click', () => {
        menuActivator.classList.add(reactiveMenu);
    });

    closeMenu.addEventListener('click', () => {
        menuActivator.classList.remove(reactiveMenu);
    });
}

const initLog = () => {
    const openLog = document.querySelector('#opn-lg');
    const closeLog = document.querySelector('#cl-lg');
    const logActivator = document.querySelector('.login-space');
    const reactiveLog = 'active-log';

    openLog.addEventListener('click', () => {
        logActivator.classList.add(reactiveLog);
    });

    closeLog.addEventListener('click', () => {
        logActivator.classList.remove(reactiveLog);
    });
}

initMenu();
initLog();


