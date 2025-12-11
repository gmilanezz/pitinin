function toggleFAQ(item) {
  item.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  faqItems.forEach(item => {
    item.addEventListener("click", () => toggleFAQ(item));
  });

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
});