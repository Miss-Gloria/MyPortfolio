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