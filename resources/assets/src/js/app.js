$(document).ready(function() {
  $(".slick-slider-1").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: $(".buttonLeft"),
  });
});
