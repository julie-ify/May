const menu = document.querySelector('.menu');
const sideMenu = document.querySelector('#side-menu');
const close = document.querySelector('.times');
let openMenu = false;

menu.addEventListener('click', showMenu);
close.addEventListener('click', closeMenu);

function showMenu() {
  if (openMenu === false) {
    sideMenu.style.display = 'block';
  } else {
    closeMenu();
    openMenu = false;
  }
}

function closeMenu() {
  sideMenu.style.display = 'none';
}
