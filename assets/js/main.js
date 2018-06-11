// Google Analytics
window.dataLayer = window.dataLayer || []
const gtag = function () {
  window.dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', 'UA-118450969-1')

// Smooth navigation
window.onload = function () {
  setTimeout(function () {
    $('body').addClass('ok')
  }, 500)
}

$(document).ready(function () {
  $('.carousel').carousel({
      interval: false
  }).on('slide.bs.carousel', function (e) {
      var nextH = $(e.relatedTarget).height();
      $(this).find('.active').parent().animate({ height: nextH }, 500);
  });
});
