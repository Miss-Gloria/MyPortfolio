 document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.remove("opacity-0");
        } else {
            scrollToTopBtn.classList.add("opacity-0");
        }
    });

    
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

 
 document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("hidden");
  });


function toggleText(element) {
        if (window.innerWidth < 768) { // Only apply click effect on mobile
            let text = element.querySelector("p");
            text.classList.toggle("opacity-100");
        }
    }

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

