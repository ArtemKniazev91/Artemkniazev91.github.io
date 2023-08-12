window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_mobile'),
    menuItem = document.querySelectorAll('.menu_item_mobile'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_mobile_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_mobile_active');
        })
    })
})
