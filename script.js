// Animaciones
window.addEventListener("load", function () {
  const skillBars = document.querySelectorAll(
    ".skill-progress, .lang-progress"
  );

  skillBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
});

// Hover
const sections = document.querySelectorAll(
  ".experience-item, .education-item, .project-item, .cert-item"
);

sections.forEach((section) => {
  section.addEventListener("mouseenter", function () {
    this.style.transform = "translateX(5px) scale(1.02)";
  });

  section.addEventListener("mouseleave", function () {
    this.style.transform = "translateX(0) scale(1)";
  });
});
