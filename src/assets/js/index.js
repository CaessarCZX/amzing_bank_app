// Session storage variables
let users = [];
let authSession = false;
let userStatement = JSON.parse(localStorage.getItem('userStatement')) ?? 0;
authSession = JSON.parse(localStorage.getItem('authSession')) ?? false;
const leaveSession = document.querySelector('#exit-account');

// vars for active spaces
const loginActivator = document.querySelector('#login-space') ?? false;
const initSession = document.querySelector('#log-session') ?? false;


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

// Function to add var to localSotorage 
// !Important note: if you are going to use this method, you must always to include the var as an object
// Example: addLocalStorage({myVar});
const addLocalStorage = (varToJSON) => {
  const varToString = varObj => Object.keys(varObj)[0];
  const varToFirstValue = varObj => Object.values(varObj)[0];
  localStorage.setItem(varToString(varToJSON),JSON.stringify(varToFirstValue(varToJSON)));
}

// For Join session
const joinSession = (form) => {
  const availableStorage = JSON.parse(localStorage.getItem('users'));
  console.log(availableStorage);
  // addLocalStorage({users});
  if (availableStorage) {
    users = availableStorage

  } else {
    
  }
  // console.log(users[0].email, users[0].getPassword(true));

  let getUser = '';
  let getPass = '';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputUser = document.querySelector('#user');
    const inputPass = document.querySelector('#pass');
    getUser = inputUser.value;
    getPass = inputPass.value;
    if (getUser && getPass) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === getUser && users[i].getPassword(true) === getPass) {
          console.log('Iniciaste sesion'); //
          inputUser.value = '';
          inputPass.value = '';
          authSession = true;
          userStatement = i;
          localStorage.setItem('userStatement', JSON.stringify(userStatement));
          localStorage.setItem('authSession', JSON.stringify(authSession));
          window.location.href = 'src/dashboard.html';
        }
      }
    }
  });
}

// For close session
const closeSession = (closeElement) => {
  console.log(closeElement)
  closeElement.addEventListener('click', () => {
    authSession = false;
    userStatement = -1;
    console.log(authSession);
    localStorage.setItem('authSession', JSON.stringify(authSession));
    localStorage.setItem('userStatement', JSON.stringify(userStatement));
    window.location.href = 'index.html';
  })
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
