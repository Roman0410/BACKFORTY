Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
new AirDatepicker("#pick-date");
$(".header-burger").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".close-menu").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".cart-btn").click(function (event) {
  $(".mini-cart").toggleClass("open");
});
$(".mini-cart .close").click(function (event) {
  $(".mini-cart").toggleClass("open");
});
$(document).on("click", function (event) {
  let cart = $(".mini-cart");
});
$(".menu-item").click(function (event) {
  $(this).find(".dish-list").toggleClass("open");
});
$(".select").click(function (event) {
  $(".sort-list").toggleClass("open");
  $(this).find("img").toggleClass("open");
});
$(".sort-item").click(function (event) {
  $(".sort-item").removeClass("selected");
  $(this).addClass("selected");
  $(".select .text").text($(".selected").text());
  $(".sort-list").toggleClass("open");
  $(".select").find("img").toggleClass("open");
});
const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
  circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
  circlePlayButton.style.opacity = 1;
});
