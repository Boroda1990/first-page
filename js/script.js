$(document).ready(function () {
  $('.first-screen-slider').slick();

});
$('.first-screen-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  let counter = slick.slickCurrentSlide() + 1 + " / " + slick.slideCount;
  $(".first-screen-slider-counter").text(counter);
});


$('.fancybox').fancybox({
  youtube : {
      controls : 0,
      showinfo : 0
  },
  vimeo : {
      color : 'f00'
  }
});