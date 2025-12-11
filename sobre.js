document.addEventListener("DOMContentLoaded", () => {
  const sobreSection = document.querySelector(".sobre-container");
  if (!sobreSection) return;

  function revealSobre() {
    const sectionTop = sobreSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      sobreSection.classList.add("show");
    }
  }

  window.addEventListener("scroll", revealSobre);
  revealSobre();
});
