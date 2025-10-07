$(document).ready(function () {
  // Hamburger menu toggle
  $("#hamburger-icon").on("click", function () {
    $(this).toggleClass("open"); // animate hamburger to X
    $("#mobile-menu-container").toggleClass("show"); // show/hide menu
  });
});
