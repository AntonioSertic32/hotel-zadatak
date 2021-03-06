$(document).ready(function() {
  $(".slick-slider-1").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    nextArrow: $(".buttonLeft"),
  });

  $(".slick-slider-2").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 700,
    prevArrow: $(".news-button-left"),
    nextArrow: $(".news-button-right"),
  });

  $(".slick-slider-3").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 700,
    prevArrow: $(".reviews-button-left"),
    nextArrow: $(".reviews-button-right"),
    dots: true,
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    focusOnSelect: true,
    infinite: true,
    prevArrow: $(".room-button-left"),
    nextArrow: $(".room-button-right"),
  });
});
