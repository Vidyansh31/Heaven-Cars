//   PRELOADER 

    $(window).on ('load', function() {
        $('.load').fadeOut('slow');
    })

    // WOW initialization.

    new WOW().init();


    // NAVIGATION MENU 



    /* Navigation menu */
$(".open-menu").click(function(){
    $(".start-menu").removeClass("button-anim-close"),
    $(".main-nav").removeClass("nav-anim"),
    $(".start-menu").removeClass("button-anim"),
    $(".main-nav ").removeClass("nav-anim-close"),
    $(".start-menu").addClass("button-anim"),
    $(".main-nav").addClass("nav-anim")
   });
   $(".close-menu").click(function(){
    $(".start-menu").removeClass("button-anim-close"),
    $(".main-nav").removeClass("nav-anim"),
    $(".start-menu").removeClass("button-anim"),
    $(".main-nav").removeClass("nav-anim-close"),
    $(".start-menu").addClass("button-anim-close"),
    $(".main-nav").addClass("nav-anim-close")
   });



   //SMOOTH SCROLL
$(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000); // The number here represents the speed of the scroll in milliseconds
              return false;
            }
        }
    });

});

// FILTERABLE GALLERY

$(document).ready(function() {
    $('.button').click(function(e) {
        e.preventDefault();
        let name = $(this).attr('data-filter');

        if(name == 'all')
        {
            $('.filter').show('2000');
        }
        else
        {
            $('.filter').not('.'+name).hide('2000');
            $('.filter').filter('.'+name).show('2000');
        }
    });
    $('.button').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })
});


// This will create a single gallery from all elements that have class "gallery-item"
$(function() {
    $('.gallery-image').magnificPopup({
        type: 'image',
        gallery:{
          enabled:true
        }
      });
});



















