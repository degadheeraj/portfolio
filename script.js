// ===== DARK MODE TOGGLE =====
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});


// ===== SCROLL ANIMATION (Nice reveal effect) =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".section, .card, .project-card").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
  el.style.transition = "0.6s ease";
  observer.observe(el);
});
