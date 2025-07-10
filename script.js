document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const vehicleCarousel = document.querySelector('.vehicle-carousel');
  if (vehicleCarousel) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function updateCarousel() {
      const slideWidth = slides[0].clientWidth;
      document.querySelector('.carousel-slides').style.transform = `translateX(-${currentIndex * slideWidth}px)`;

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    let autoRotate = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }, 5000);

    vehicleCarousel.addEventListener('mouseenter', () => {
      clearInterval(autoRotate);
    });

    vehicleCarousel.addEventListener('mouseleave', () => {
      autoRotate = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
      }, 5000);
    });
  }

  const energyCarousel = document.querySelector('.energy-carousel');
  if (energyCarousel) {
    const slides = document.querySelectorAll('.energy-slide');
    const dots = document.querySelectorAll('.energy-dots .dot');
    let currentIndex = 0;

    function updateCarousel() {
      const slideWidth = slides[0].clientWidth;
      document.querySelector('.energy-slides').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });

    let autoRotate = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }, 5000);

    energyCarousel.addEventListener('mouseleave', () => {
      autoRotate = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
      }, 5000);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});