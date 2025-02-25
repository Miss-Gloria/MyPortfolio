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
