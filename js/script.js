document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  if (loader) loader.remove();
});

const hamburger = document.getElementById("hamburger-icon");
const mobileMenu = document.getElementById("mobile-menu-container");

hamburger.addEventListener("click", () => {
  // Toggle the 'open' class on the hamburger icon for the 'X' animation
  hamburger.classList.toggle("open");

  // Toggle the 'show' class on the menu to make it appear/disappear
  mobileMenu.classList.toggle("show");
});
