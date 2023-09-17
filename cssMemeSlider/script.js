document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".pagination-dot");
  const text = document.querySelector(".slide-text");
  let currentIndex = 0;

  function showSlide(index) {
    text.classList.add("animation");

    slides.forEach((slide, i) => {
      if (i === index) {
        switch (i) {
          case 0:
            // text.style.animation = "animate-text 1500ms forwards";
            text.textContent = "Yeah, unfortunately it's true!";
            break;
          case 1:
            // text.style.animation = "animate-text 1500ms forwards";
            text.textContent = "The Rock and Obama? What??";
            break;
          case 2:
            // text.style.animation = "animate-text 1500ms forwards";
            text.textContent = "Just skip it!";
            break;
          case 3:
            // text.style.animation = "animate-text 1500ms forwards";
            text.textContent = " I can't resist a pizza!";
            break;
        }
        slide.style.animation = "animate 1500ms forwards";
        slide.style.display = "block";
      } else {
        slide.style.opacity = "0";
        slide.style.display = "none";
      }
    });
    setTimeout(() => {
      text.classList.remove("animation");
    }, 300);
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

// // Добавьте обработчики событий для переключения слайдов по клику на контролы
// dots.forEach((dot, i) => {
//   dot.addEventListener("click", function () {
//     currentIndex = i;
//     showSlide(currentIndex);
//     activateDot(currentIndex);

//     // Удалите активный класс у всех контролов перед добавлением к текущему
//     dots.forEach((dot) => {
//       dot.classList.remove("active");
//     });

//     // Добавьте активный класс текущему контролу
//     dot.classList.add("active");
//   });

//   dot.addEventListener("mouseenter", function () {
//     dot.querySelector(".dot-inner").style.opacity = "1";
//   });

//   dot.addEventListener("mouseleave", function () {
//     dot.querySelector(".dot-inner").style.opacity = "0";
//   });
// });
