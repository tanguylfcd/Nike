window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

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

  //   sections = document.querySelectorAll(".sectionAnim");
  //   sections.forEach((section) => {
  //     gsap.from(section, {
  //       y: 500,
  //       scrollTrigger: {
  //         trigger: section,
  //         //markers: true,
  //         start: "-500px 70%",
  //         end: "-400px 60%",
  //       },
  //     });
  //   });
});
