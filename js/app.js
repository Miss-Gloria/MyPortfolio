 var i = 0;
  var txt = 'Your Vision, My Code, Let\'s Create Magic!!'; // Text to type
  var speed = 100; // Typing speed

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typing-text").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  // Start typing when page loads
  window.onload = function () {
    typeWriter();
  };
  document.addEventListener("DOMContentLoaded", () => {
    taos.init();
});

// const carousel = document.getElementById("carousel");
// const images = carousel.children;
// const totalSlides = images.length;
// let index = 0;

// function autoSlide() {
//   index = (index + 1) % totalSlides;
//   updateCarousel();
// }

// function updateCarousel() {
//   carousel.style.transform = `translateX(-${index * 100}%)`;
// }

// // Auto-slide every 3 seconds
// setInterval(autoSlide, 2000);
  document.querySelectorAll(".faq-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector(".faq-icon");

      if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
        icon.innerHTML = "▼"; // Change to down arrow
      } else {
        answer.classList.add("hidden");
        icon.innerHTML = "➤"; // Change back to right arrow
      }
    });
  });
