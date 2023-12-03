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


const $animation_elements = $('.colors_block, .how_block, .delivery_block, .line, .form_descr, .advantages_item, .click');
const $window = $(window);

function check_if_in_view() {
  const window_height = $window.height();
  const window_top_position = $window.scrollTop();
  const window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    const $element = $(this);
    const element_height = $element.outerHeight();
    const element_top_position = $element.offset().top;
    const element_bottom_position = (element_top_position + element_height);
 

    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('is-visible');
    } else {
      $element.removeClass('is-visible');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
});


$(window).scroll(function() {
    let scrolled = $(window).scrollTop();

    if(scrolled > 350) {
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});