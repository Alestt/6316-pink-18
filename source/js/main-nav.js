var navMain = document.querySelector(".burger");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("burger--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("burger--closed")) {
    navMain.classList.remove("burger--closed");
    navMain.classList.add("burger--opened");
  } else {
    navMain.classList.add("burger--closed");
    navMain.classList.remove("burger--opened");
  }
});
