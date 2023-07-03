const button = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

button.addEventListener('click', () => {
    button.classList.toggle("open");
    menu.classList.toggle("hidden");
    menu.classList.toggle("block");
})