// ==========================
//  Swarnit Kumar Portfolio
//  Interactive JS Effects
// ==========================

// Header scroll effect (adds shadow on scroll)
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Smooth page fade-in
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

// Animate headings on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("h2").forEach((el) => observer.observe(el));

// Show alert for contact clicks
const contactLinks = document.querySelectorAll("a[href^='mailto'], a[href^='tel']");
contactLinks.forEach((link) => {
  link.addEventListener("click", () => {
    alert("Opening your default mail or call app...");
  });
});
