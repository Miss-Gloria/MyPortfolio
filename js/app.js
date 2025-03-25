 

 
 document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("hidden");
  });


function toggleText(element) {
        if (window.innerWidth < 768) { // Only apply click effect on mobile
            let text = element.querySelector("p");
            text.classList.toggle("opacity-100");
        }
    }


const faders = document.querySelectorAll(".fade-in-on-scroll");

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.remove("opacity-0", "translate-y-8", "scale-95");
      entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0,
  });

  faders.forEach(fade => {
    appearOnScroll.observe(fade);
  });


  document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".faq-btn");

    faqs.forEach((faq) => {
      faq.addEventListener("click", function () {
        // Find all FAQ contents and icons
        const allContents = document.querySelectorAll(".faq-content");
        const allIcons = document.querySelectorAll(".faq-icon");
        
        // Get the currently clicked content and icon
        const content = this.nextElementSibling;
        const icon = this.querySelector(".faq-icon");

        // Close all other FAQs
        allContents.forEach((c) => {
          if (c !== content) c.classList.add("hidden");
        });

        allIcons.forEach((i) => {
          if (i !== icon) i.textContent = "➤"; // Reset other icons
        });

        // Toggle the clicked FAQ
        if (content.classList.contains("hidden")) {
          content.classList.remove("hidden");
          icon.textContent = "▼"; // Change icon to down arrow
        } else {
          content.classList.add("hidden");
          icon.textContent = "➤"; // Change back to right arrow
        }
      });
    });
  });
  


const form = document.getElementById("contact-form");
const messageBox = document.getElementById("form-message");
const submitBtn = document.getElementById("submit-button");
const buttonText = document.getElementById("button-text");
const buttonSpinner = document.getElementById("button-spinner");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

// Show spinner & disable button
  submitBtn.disabled = true;
  buttonText.textContent = "Sending...";
  buttonSpinner.classList.remove("hidden");

  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("https://myportfolio-o7h1.onrender.com/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      messageBox.textContent = "✅ Sent!";
      messageBox.className = "text-green-600 text-sm";
      form.reset();
    } else {
      messageBox.textContent = "❌ " + (data.errors?.[0] || data.message);
      messageBox.className = "text-red-600 text-sm";
    }

  } catch (err) {
    messageBox.textContent = "Not Sent!";
    messageBox.className = "text-red-600 text-sm";
    console.error(err);
  }
   // Hide spinner & re-enable button
  buttonText.textContent = "Submit";
  buttonSpinner.classList.add("hidden");
  submitBtn.disabled = false;

  // 🔁 Make the message disappear after 5 seconds
  setTimeout(() => {
    messageBox.textContent = "";
  }, 5000);
});




