window.addEventListener("DOMContentLoaded", function () {
  let burger = document.getElementById("burger");
  let menu = document.querySelector(".header__menu");

  burger.addEventListener("click", function () {
    menu.classList.toggle("menu_open");
  });
});
