import '../css/style.css';
// nav scroll
$("a").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#" + $(this).data("value")).offset().top,
    },
    1000
  );
});
// portfolio Slider
var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    950: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

// Go to the next item
$(".customNextBtn").click(function () {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".customPrevBtn").click(function () {
  owl.trigger("prev.owl.carousel");
});

//CopyRights
var y = new Date().getFullYear();
$(".current-year").text(y);
