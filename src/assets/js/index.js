
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


