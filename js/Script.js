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

$(document).ready(function(){
    $('.multiple-items').slick({
        arrows:true,
        dots:false,
        infinite: true, 
        slidesToShow: 3, 
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 801,
                settings: {
                    slidesToShow:2,
                    arrows:false,
                    dots:true,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1,
                    arrows:false,
                    dots:true,
                }
            }
            ] 
    });
});