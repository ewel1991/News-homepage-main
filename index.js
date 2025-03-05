
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('menu');


function toggleMenu() {

  if (menu.style.display === 'flex') {
    menu.style.display = 'none'; 
    menuToggle.style.display = 'block'; 
    menuClose.style.display = 'none'; 
  } else {
    menu.style.display = 'flex'; 
    menuToggle.style.display = 'none'; 
    menuClose.style.display = 'block'; 
  }
}


menuToggle.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);