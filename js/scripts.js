/*маска для ввода номера*/

$(function(){
  $("#phone-login").mask("+7 999 999 99 99");
});



/*кнопка избранное на карточке*/


$('.favorite').on('click', function(){
    $(this).toggleClass('icon-favorite-full');
});


$(document).ready(function() {
    $('.slider-product').slick({
      mobileFirst: true,
      responsive: [
      {
        breakpoint: 0,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,

        }
      },
       {
        breakpoint: 670,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,

        }
      },
      {
        breakpoint: 1000,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,

        }
      },
        {
           breakpoint: 1199,
           settings: "unslick",
        },
       
     ]
    });
});


$(document).ready(function() {
    $('.slider-review').slick({
      arrows: false,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      easing: 'linear',
      responsive: [

      {
        breakpoint: 1200,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            easing: 'linear',

        }
      },
      {
        breakpoint: 800,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            easing: 'linear',

        }
      },

      ]
    });
});



/*Кнопка прокрутки страницы вверх*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
