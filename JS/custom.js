
$(window).on("load",function(){
    $(".load").fadeOut('slow');
});

// $(window).on("ready",function(){
//     $(".load").delay(8000).fadeOut(4000);
// });

$(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    if(scrolling>10){
        $('.navbar').addClass('nav-fix');
        
    }else{
        $('.navbar').removeClass('nav-fix');

    }

    if (scrolling > 1000) {
        $('.top').fadeIn({
            fadeSpeed: 1200,
        });
    } else {
        $('.top').fadeOut({
            fadeSpeed: 2000,
        });
    }
})

$(document).ready(function() {

    $(".slide").slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '.list-item',
    });


    $(".list-item").slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        // fade: true,
        fadeSpeed: 4000,
        asNavFor: '.slide',
    });


    $('.number').counterUp({
        delay: 1,
        time: 1000,
    });

});

$(document).ready(function($) {
    $('.nav-item').on('click',function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.top').on('click',function(){
        $('html,body').animate({
            scrollTop: 0,
        }, 1200);
    });
});


