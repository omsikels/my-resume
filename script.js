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

//ASCII Gif Logic

const asciiGifSection = document.getElementByID("ascii-gif");
const gif = asciiGifSection.querySelector(".ascii-gif");
const gifContainer = asciiGifSection.querySelectir(".gif-container");

//Intersection OBserver to trigger visibility of the ASCII GIF
const gifObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Show the GIF when the section is in view
        gif.style.display = "block";
      } else {
        // Hide the GIF when it's out of view
        gif.style.display = "none";
      }
    });
  },
  { threshold: 0.3 }  // 30% visibility before triggering
);

// Observe the ASCII GIF section
gifObserver.observe(asciiGifSection);
