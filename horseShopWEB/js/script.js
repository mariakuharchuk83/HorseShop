$(document).ready(function () {

    $('#main_sliders').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1700,
        prevArrow: "<img src='./img/next_arrow.svg'  class='prev' alt='1'>",
        nextArrow: "<img src='./img/next_arrow.svg'  class='next' alt='2'>",
        responsive: [
            {
              breakpoint:768,
              settings: {
                arrows: false,
              }
            },
        ]
    });

    // кнопка бургер меню
    $('.burger_button').click(function(){
      $(this).toggleClass('active');
      $('body').toggleClass('lock');

      if($('#nav_menu_desktop').hasClass('active')){
        $('#nav_menu_desktop').toggleClass('active').fadeOut(300);
        
      }
      else{
        $('#nav_menu_desktop').toggleClass('active').css("display", "flex").fadeIn(300);
       
      }
    });

    $('.footer_menu_category').click(function(){
      
      let ul_menu = $(this).next();

        if($(ul_menu).hasClass('active')){
          $(ul_menu).toggleClass('active').slideUp(300);
          $(this.childNodes[1]).toggleClass('active')
        }
        else{
          $(ul_menu).toggleClass('active').slideDown(300);
          $(this.childNodes[1]).toggleClass('active')
        }

    });

});