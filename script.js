const toggleButton = document.getElementById("themeToggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//Animate on scroll
const animatedElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        //Animate Skill Bars
        const fills = entry.target.querySelectorAll(".fill");
        fills.forEach((fill) => {
          fill.style.width = fill.getAttribute("style").split(":")[1];
        });

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

animatedElements.forEach((el) => observer.observe(el));
