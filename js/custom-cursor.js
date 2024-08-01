document.addEventListener("DOMContentLoaded", function(event) {
    var cursor = document.querySelector(".custom-cursor");
    var links = document.querySelectorAll("a");
    var initCursor = false;
  
    for (var i = 0; i < links.length; i++) {
      var selfLink = links[i];
  
      selfLink.addEventListener("mouseover", function() {
        cursor.classList.add("custom-cursor--link");
      });
      selfLink.addEventListener("mouseout", function() {
        cursor.classList.remove("custom-cursor--link");
      });
    }
  
    window.onmousemove = function(e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;
  
      if (!initCursor) {
        // cursor.style.opacity = 1;
        TweenLite.to(cursor, 0.3, {
          opacity: 1
        });
        initCursor = true;
      }
  
      TweenLite.to(cursor, 0, {
        top: mouseY + "px",
        left: mouseX + "px"
      });
    };
  
    window.onmouseout = function(e) {
      TweenLite.to(cursor, 0.3, {
        opacity: 0
      });
      initCursor = false;
    };
  });
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.movable-img');
        let visibleImages = new Set();

        // IntersectionObserver to track when elements are in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    visibleImages.add(entry.target);
                } else {
                    visibleImages.delete(entry.target);
                }
            });
        });

        images.forEach(image => {
            observer.observe(image);
        });

        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX;
            const windowWidth = window.innerWidth;

            // Calculate the translation amount for the opposite direction
            const translateX = ((windowWidth - mouseX) / windowWidth) * 40 - 20; // Adjust the multiplier and offset as needed

            visibleImages.forEach(image => {
                image.style.transform = `translate(${translateX}px, -50px) scale(1.2)`;
            });
        });
    });
  
    document.addEventListener('DOMContentLoaded', function() {
        const arrows = document.querySelectorAll('.arrow');
    
        arrows.forEach(arrow => {
            arrow.addEventListener('click', function() {
                const targetId = arrow.getAttribute('target');
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                  console.log(targetElement)
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
      const sections = document.querySelectorAll('.target');
      let index = 0;
      let isScrolling = false; // Flag to prevent multiple scrolls
  
      const nextButton = document.getElementById('next');
      const prevButton = document.getElementById('prev');
  
      function scrollToSection(index) {
          sections[index].scrollIntoView({ behavior: 'smooth' });
          updateButtonVisibility();
      }
  
      function scrollToNextSection() {
          if (!isScrolling && index < sections.length - 1) {
              isScrolling = true;
              index++;
              scrollToSection(index);
              setTimeout(() => {
                  isScrolling = false;
              }, 500); // Adjust delay if needed based on your animation duration
          }
      }
  
      function scrollToPrevSection() {
          if (!isScrolling && index > 0) {
              isScrolling = true;
              index--;
              scrollToSection(index);
              setTimeout(() => {
                  isScrolling = false;
              }, 500); // Adjust delay if needed based on your animation duration
          }
      }
  
      function updateButtonVisibility() {
          if (index === 0) {
              prevButton.style.display = 'none';
          } else {
              prevButton.style.display = 'block';
          }
  
          if (index === sections.length - 1) {
              nextButton.style.display = 'none';
          } else {
              nextButton.style.display = 'block';
          }
      }
  
      function determineCurrentSection() {
          let currentSection = 0;
          sections.forEach((section, idx) => {
              const rect = section.getBoundingClientRect();
              if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                  currentSection = idx;
              }
          });
          return currentSection;
      }
  
      window.addEventListener('wheel', function(e) {
          if (e.deltaY > 0) {
              scrollToNextSection();
          } else {
              scrollToPrevSection();
          }
      });
  
      nextButton.addEventListener('click', function() {
          scrollToNextSection();
      });
  
      prevButton.addEventListener('click', function() {
          scrollToPrevSection();
      });
  
      // Determine the initial section based on the scroll position
      index = determineCurrentSection();
      updateButtonVisibility();
  });
  
  