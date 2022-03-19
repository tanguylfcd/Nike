window.addEventListener("DOMContentLoaded", function () {
  let burger = document.getElementById("burger");
  let menu = document.querySelector(".header__menu");

  burger.addEventListener("click", function () {
    menu.classList.toggle("header__menu--open");
    if (menu.classList.contains("header__menu--open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
});
