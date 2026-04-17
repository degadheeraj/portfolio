// DARK MODE TOGGLE
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});


// SCROLL ANIMATION (fade-in sections)
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});
