function toggleFAQ(item) {
  item.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.addEventListener("click", () => toggleFAQ(item));
  });
});
