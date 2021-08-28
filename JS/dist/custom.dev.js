"use strict";

$(document).ready(function () {
  $(".slide").slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 900,
    autoplay: false,
    autoplaySpeed: 4000,
    asNavFor: '.list-item'
  });
  $(".list-item").slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 900,
    fade: true,
    fadeSpeed: 4000,
    asNavFor: '.slide'
  });
});
$(window).on("load", function () {
  $(".load").delay(2000).fadeOut(3000);
});