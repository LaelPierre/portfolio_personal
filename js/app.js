// sidebar toggle
// select element
const openBtn = document.getElementById("nav-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");
const navbar = document.getElementById("nav");

openBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// fixed navbar
window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
