// set $ ​​instead of document
const $ = document;

// assign blur body to blurBody Variable
const blurBody = $.querySelector(".blur-body");
// assign window position to windowPosition Variable
const windowPosition = window.innerHeight;
// assign header to header Variable
const header = $.querySelector("header");
// assign menu bar to menuBar Variable
const menuBar = $.querySelector("#menu-bar");
// assign open menu to openMenu Variable
const openMenu = $.querySelector("#open-menu");
// assign close menu to closeMenu Variable
const closeMenu = $.querySelector("#close-menu");
// assign main page to mainPage Variable
const mainPage = $.querySelector(".home");
// assign go up to goUp Variable
const goUp = $.querySelector("#go-up");

// disable scroll bar
function disableScrollBar() {
  $.body.classList.add("disable-scroll-bar");
}

// enable scroll bar
function enableScrollBar() {
  $.body.classList.remove("disable-scroll-bar");
}

// add a click event to remove the menu bar after clicking the home button
mainPage.addEventListener("click", function () {
  menuBar.classList.remove("menu-bar");
  blurBody.classList.remove("blur-sm");
  closeMenu.classList.remove("z-1");
  enableScrollBar();
});

// add a click event to open the menu after clicking the open menu button
openMenu.addEventListener("click", function () {
  menuBar.classList.add("menu-bar");
  blurBody.classList.toggle("blur-sm");
  closeMenu.classList.add("z-1");
  disableScrollBar();
});

// add a click event to close the menu after clicking the close menu button
closeMenu.addEventListener("click", function () {
  menuBar.classList.remove("menu-bar");
  blurBody.classList.remove("blur-sm");
  closeMenu.classList.remove("z-1");
  enableScrollBar();
});

// creating swiper slider to promote products
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  spaceBetween: 25,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// add a scroll event to show and hide the button to go to the top of the page
window.addEventListener("scroll", (event) => {
  let currnet = $.documentElement.scrollTop;
  if (currnet > window.innerHeight) {
    goUp.classList.replace("opacity-0", "opacity-100");
  } else {
    goUp.classList.replace("opacity-100", "opacity-0");
  }
});

// add a click event to go to the top of the page
goUp.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
