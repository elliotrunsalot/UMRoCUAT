var fadeHeader = document.querySelector(".fade-header");

if (fadeHeader) {
    window.addEventListener("scroll", function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
      if (scrollTop > 0) {
        fadeHeader.classList.add("visible");
      } else {
        fadeHeader.classList.remove("visible");
      }
    });
}

function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav23");
  
  if (!burger || !nav) return;

  burger.addEventListener("click", () => {
    // Query links here to ensure they exist
    const navLinks = document.querySelectorAll(".nav23 li");
    
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle("toggle");
  });
}

// Run after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
});

