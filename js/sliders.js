$(".hero-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: "ease-in-out",
  pauseOnHover: false,
});
$(".food-slider").slick({
  slidesToShow: 5,
  centerMode: true,
  prevArrow: $(".food-prew").find(".prev"),
  nextArrow: $(".food-prew").find(".next"),
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".menu-slider").slick({
  slidesToShow: 6,
  prevArrow: $(".menu-prev").find(".prev"),
  nextArrow: $(".menu-prev").find(".next"),
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

        centerMode: true,
      },
    },
  ],
});
$(".reviews-slider").slick({
  slidesToShow: 2,
  prevArrow: $(".reviews").find(".prev"),
  nextArrow: $(".reviews").find(".next"),
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
