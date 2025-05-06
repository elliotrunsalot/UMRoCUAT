var fadeHeader = document.querySelector(".fade-header");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    fadeHeader.classList.add("visible");
  } else {
    fadeHeader.classList.remove("visible");
  }
});

function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav23");
  const navLinks = document.querySelectorAll(".nav23 li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkFade 1s ease forwards ${
          index / 7 + 1.5
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
}

navSlide();
