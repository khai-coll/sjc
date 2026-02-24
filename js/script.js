// Sets constants for the chosen classes and IDs
const menu = document.querySelector('#menu_icon');
const nav = document.querySelector('.navlist');
const main = document.querySelector('main');

menu.onclick = () =>{ // When the menu icon is clicked, do the following
    menu.classList.toggle('bx_x') // Toggles the bx_x class to the menu icon
    nav.classList.toggle('open') // Toggles the open class on elements with the "navlist" class
    main.classList.toggle('open') // Toggles the open class on the "main" element
}