Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
$(".header-burger").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".close-menu").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".more").click(function (event) {
  $(".text-block").toggleClass("open");
  $(".about-company")
    .find(".btn")
    .text(function (i, text) {
      return text === "read more" ? "close" : "read more";
    });
});
$(".menu-item").click(function (event) {
  $(this).find(".dish-list").toggleClass("open");
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
