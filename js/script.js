// ✅ Wait until DOM is ready
$(document).ready(function () {
  // Fade out preloader after 4s
  setTimeout(function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove(); // remove after fadeOut completes
    });
  }, 4000);

  // Hamburger menu toggle
  $("#hamburger-icon").on("click", function () {
    $(this).toggleClass("open"); // animate hamburger to X
    $("#mobile-menu-container").toggleClass("show"); // show/hide menu
  });
});
