
$(window).on("load",function(){
    $(".load").fadeOut('slow');
});

$(window).on("ready",function(){
    $(".load").delay(8000).fadeOut(4000);
});

$(document).ready(function() {

    $(".slide").slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        autoplay: true,
        autoplaySpeed: 9000,
        asNavFor: '.list-item',
    });


    $(".list-item").slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        fade: true,
        fadeSpeed: 4000,
        asNavFor: '.slide',
    });

});


