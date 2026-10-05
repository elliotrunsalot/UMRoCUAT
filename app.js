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

  // Close mobile nav when clicking a link
  const navLinksAll = document.querySelectorAll(".nav23 a");
  navLinksAll.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("nav-active")) {
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
        const navLinks = document.querySelectorAll(".nav23 li");
        navLinks.forEach((item) => {
          item.style.animation = "";
        });
      }
    });
  });

  // Close when pressing Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("nav-active")) {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
      const navLinks = document.querySelectorAll(".nav23 li");
      navLinks.forEach((item) => {
        item.style.animation = "";
      });
    }
  });
}

// Run after DOM is fully loaded or immediately if already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', navSlide);
} else {
    navSlide();
}

