// For save Session storage
// let authSession = JSON.parse(localStorage.getItem('authSession')) ?? false;
let currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? false;

// vars for active spaces
const loginActivator = document.querySelector('#login-space') ?? false;
const initSession = document.querySelector('#log-session') ?? false;
const leaveSession = document.querySelector('#exit-account') ?? false;


//For wrapper menu
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

// Initialize float windows
const initFloatWindow = (nodeElement) => {
  const openLog = document.querySelector('#open-space');
  const closeLog = document.querySelector('#close-space');
  const reactiveLog = 'active-space';

  openLog.addEventListener('click', () => {
    nodeElement.classList.add(reactiveLog);
  });

  closeLog.addEventListener('click', () => {
    nodeElement.classList.remove(reactiveLog);
  });
}

// Functions to Local Storage
// !Important note: if you are going to use this method, you must always to include the var as an object
// Example: addLocalStorage({myVar});
const addLocalStorage = (varSave, customName = null) => {
  const varToString = varObj => Object.keys(varObj)[0];
  const varValue = varObj => Object.values(varObj)[0];
  const nameVarToJSON = customName ?? varToString(varSave);
  const contentVarToJSON = varValue(varSave);
  localStorage.setItem(nameVarToJSON,JSON.stringify(contentVarToJSON));
}

const removeLocalStorage = (varRemove) => {
  const varToString = varObj => Object.keys(varObj)[0];
  const nameVarToJSON = varToString(varRemove);
  localStorage.removeItem(nameVarToJSON);
}

// For Join session
const joinSession = (form) => {

  let getUser = '';
  let getPass = '';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputUser = document.querySelector('#user');
    const inputPass = document.querySelector('#pass');
    getUser = inputUser.value;
    getPass = inputPass.value;
    if (getUser && getPass) {
      fetch('api/users.json')
        .then(response => response.json())
        .then(response => {
          const userFound = response.find(user => user.email === getUser && user.password === getPass || user.username === getUser && user.password === getPass);
          if (userFound) {
            currentUser = userFound;
            addLocalStorage({currentUser});
            window.location.href = 'src/dashboard.html'
          }
        })
        .catch(error => {
          console.error('Error al realizar la solicitud:', error);
        });
    }
  });
}

// For close session
const closeSession = (closeElement) => {
  console.log(closeElement)
  closeElement.addEventListener('click', () => {
    // authSession = false;
    currentUser = false;
    removeLocalStorage({currentUser})
    window.location.href = '../index.html';
  })
}

const renderUserDashboard = (currentUser) => {
  const nameClient = document.querySelector('#show-name-client');
  const balanceClient = document.querySelector('#show-balance-client');
  nameClient.textContent = `${currentUser.name} ${currentUser.lastName}`;
  balanceClient.textContent = `${currentUser.accounts[0].balance}`
}

initMenu();
if (loginActivator) {
  initFloatWindow(loginActivator);
}
if (initSession) {
  joinSession(initSession);
}
if (leaveSession) {
  closeSession(leaveSession);
}
if (currentUser) {
  renderUserDashboard(currentUser);
}
