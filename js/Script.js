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

window.addEventListener('load', function() {
    carouselRUN();
}, false);

function carouselRUN() {
    var carousel = document.getElementById("carousel");
    var scene = document.getElementById("scene");
    var carousel_items_Arrey = document.getElementsByClassName("carousel_item");
    var carousel_btn = document.getElementById("carousel_btn");
    var n = carousel_items_Arrey.length;
    var curr_carousel_items_Arrey = 0;
    var theta = Math.PI * 2 / n;
    var interval = null;
    var autoCarousel = carousel.dataset.auto;

    setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
    window.addEventListener('resize', function() {
        clearInterval(interval);
        setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
    }, false);
    setupNavigation();

    function setupCarousel(n, width) {
        var apothem = width / (2 * Math.tan(Math.PI / n));
        scene.style.transformOrigin = `50% 50% ${- apothem}px`;

        for (i = 1; i < n; i++) {
            carousel_items_Arrey[i].style.transformOrigin = `50% 50% ${- apothem}px`;
            carousel_items_Arrey[i].style.transform = `rotateY(${i * theta}rad)`;
        }

        if (autoCarousel === "true") {
            setCarouselInterval();
        }
    }

    function setCarouselInterval() {
        interval = setInterval(function() {
            curr_carousel_items_Arrey++;
            scene.style.transform = `rotateY(${(curr_carousel_items_Arrey) * -theta}rad)`;
        }, 3000);
    }

    function setupNavigation() {
        carousel_btn.addEventListener('click', function(e) {
            e.stopPropagation();
            var target = e.target;

            if (target.classList.contains('next')) {
                curr_carousel_items_Arrey++;
            } else if (target.classList.contains('prev')) {
                curr_carousel_items_Arrey--;
            }
            clearInterval(interval);
            scene.style.transform = `rotateY(${curr_carousel_items_Arrey * -theta}rad)`;

            if (autoCarousel === "true") {
                setTimeout(setCarouselInterval(), 3000);
            }
        }, true);
    }
};