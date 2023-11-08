
const menuDrawer = document.getElementById('menu-drawer');
const hamburgerMenu = document.getElementById('hamburger-menu');
const closebtn=document.getElementById('close-button');

closebtn.addEventListener('click',close);

hamburgerMenu.addEventListener('click', () => {
    menuDrawer.classList.add('open');
    hamburgerMenu.classList.remove('show');
    hamburgerMenu.classList.add('hide');
    
    document.addEventListener('click', closefun);
});

function close() {
    menuDrawer.classList.remove('open');
    hamburgerMenu.classList.remove('hide');
    hamburgerMenu.classList.add('show');
    document.removeEventListener('click', closefun);
}


function closefun(event) {
    if (!menuDrawer.contains(event.target) && event.target !== hamburgerMenu) {
        close();
    }
}