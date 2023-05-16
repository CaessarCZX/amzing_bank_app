
const initMenu = () => {
    const areaMenu = document.querySelector('.header__content-nav')
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

initMenu();