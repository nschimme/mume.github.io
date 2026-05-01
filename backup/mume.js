/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar");
var gandalf = document.getElementById("gandalf");
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (prevScrollpos > currentScrollPos || prevScrollpos < 10 || width <= 650) {
    if (navbar) navbar.style.top = "0";
    if (gandalf) gandalf.style.top = (width <= 650) ? "10px" : "22px";
  } else {
    if (navbar) navbar.style.top = "-70px";
    if (gandalf) gandalf.style.top = "-86px";
  }
  prevScrollpos = currentScrollPos;
}
