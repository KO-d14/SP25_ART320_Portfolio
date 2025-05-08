document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".scroll-animate");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animation = entry.target.getAttribute("data-animate");
          entry.target.classList.add(animation);
          observer.unobserve(entry.target); // animate once
        }
      });
    }, {
      threshold: 0.2
    });
  
    elements.forEach(el => observer.observe(el));
  });
  