document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".pagination-dot");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function activateDot(index) {
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", function () {
      currentIndex = i;
      showSlide(currentIndex);
      activateDot(currentIndex);
    });
  });

  showSlide(currentIndex);
  activateDot(currentIndex);
});
