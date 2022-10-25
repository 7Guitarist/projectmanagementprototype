jQuery(window).on("scroll", function () {
  if ($(window).width() > 1023 && $(window).scrollTop() > 56) {
    $("header.header").addClass("show-fixed animated fadeInDown");
  } else {
    $("header.header").removeClass("show-fixed animated fadeInDown");
  }
});
