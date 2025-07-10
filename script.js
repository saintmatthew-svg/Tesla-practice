document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.tesla-carousel .slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    let slideInterval = setInterval(nextSlide, 7000);

    const track = document.querySelector('.carousel-track');
    const slides2 = document.querySelectorAll('.carousel-section .slide');
    const dots2 = document.querySelectorAll('.carousel-section .dot');
    let currentSlide = 0;
    const slideCount2 = slides2.length;

    function updateSlide(index) {
        if (index >= slideCount2) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slideCount2 - 1;
        } else {
            currentSlide = index;
        }
        
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots2.forEach(dot => dot.classList.remove('active'));
        dots2[currentSlide].classList.add('active');
    }

    const carousel = document.querySelector('.carousel-section .carousel');
    
    const prevBtn2 = document.createElement('button');
    prevBtn2.className = 'slider-btn prev';
    prevBtn2.innerHTML = '❮';
    prevBtn2.addEventListener('click', () => {
        updateSlide(currentSlide - 1);
    });
    
    const nextBtn2 = document.createElement('button');
    nextBtn2.className = 'slider-btn next';
    nextBtn2.innerHTML = '❯';
    nextBtn2.addEventListener('click', () => {
        updateSlide(currentSlide + 1);
    });
    
    carousel.appendChild(prevBtn2);
    carousel.appendChild(nextBtn2);

    dots2.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            updateSlide(i);
        });
    });

    let slideInterval2 = setInterval(() => {
        updateSlide(currentSlide + 1);
    }, 5000);

    const carousels = document.querySelectorAll('.slider, .carousel-track');
    carousels.forEach(carousel => {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
            clearInterval(slideInterval2);
        });
        carousel.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 7000);
            slideInterval2 = setInterval(() => {
                updateSlide(currentSlide + 1);
            }, 5000);
        });
    });
});