const menu = document.querySelector('.menu>i');
const links = document.querySelector('.links');
menu.addEventListener('click',showMenu)
function showMenu(event)
{
    if (event.type === 'click')
    links.classList.toggle('activeMenu');
}