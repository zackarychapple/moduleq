$(document).ready(function () {
  $('.j-slider').slick({
    nextArrow: '<div class="next-arrow">' +
    '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="">Previous</button>' +
    '<svg  viewBox="0 0 60 60"><use xlink:href="#icon-slider"></use></svg></div>',
    prevArrow: '<div class="prev-arrow">' +
    '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="">Previous</button>' +
    '<svg  viewBox="0 0 60 60"><use xlink:href="#icon-slider"></use></svg></div>'
  });

  $('.fancybox').fancybox({
    iframe: {
      css: {
        'max-width': 600,
        'max-height': 400
      }
    }
  });
});
