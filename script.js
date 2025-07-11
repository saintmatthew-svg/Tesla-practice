document.addEventListener('DOMContentLoaded', function() {
  // Header scroll effect
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Carousel functionality
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

  // Energy carousel
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

    energyCarousel.addEventListener('mouseenter', () => {
      clearInterval(autoRotate);
    });

    energyCarousel.addEventListener('mouseleave', () => {
      autoRotate = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
      }, 5000);
    });
  }

  // Order page functionality
  if (document.querySelector('.order-customization')) {
    const sections = document.querySelectorAll('.order-section');
    const navSteps = document.querySelectorAll('.nav-step');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSectionIndex = 0;

    function updateNavButtons() {
      prevBtn.disabled = currentSectionIndex === 0;
      nextBtn.innerHTML = currentSectionIndex === sections.length - 1 ? 
        'Review Order <i class="fas fa-chevron-right"></i>' : 
        'Next <i class="fas fa-chevron-right"></i>';
    }

    function showCurrentSection() {
      sections.forEach((section, index) => {
        section.classList.toggle('active', index === currentSectionIndex);
      });
      
      navSteps.forEach((step, index) => {
        step.classList.toggle('active', index === currentSectionIndex);
      });
      
      updateNavButtons();
    }

    navSteps.forEach(step => {
      step.addEventListener('click', function() {
        const sectionId = this.dataset.section;
        currentSectionIndex = Array.from(navSteps).findIndex(step => step.dataset.section === sectionId);
        showCurrentSection();
      });
    });

    prevBtn.addEventListener('click', function() {
      if (currentSectionIndex > 0) {
        currentSectionIndex--;
        showCurrentSection();
      }
    });

    nextBtn.addEventListener('click', function() {
      if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        showCurrentSection();
      } else {
        alert('Proceeding to payment...');
      }
    });

    // Option selection
    document.querySelectorAll('.color-option, .wheel-option, .interior-option, .drivetrain-option').forEach(option => {
      option.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.querySelectorAll('.selected').forEach(selected => {
          selected.classList.remove('selected');
        });
        this.classList.add('selected');
        updateOrderSummary();
      });
    });

    // Update order summary
    function updateOrderSummary() {
      const basePrice = 39990;
      let total = basePrice;
      
      // Get selected options
      const selectedColor = document.querySelector('.color-option.selected');
      const selectedWheel = document.querySelector('.wheel-option.selected');
      const selectedInterior = document.querySelector('.interior-option.selected');
      const selectedDrivetrain = document.querySelector('.drivetrain-option.selected');
      
      // Update summary items
      document.querySelectorAll('.summary-item')[0].innerHTML = `
        <span>${selectedColor.querySelector('span:first-child').textContent}</span>
        <span>${selectedColor.dataset.price > 0 ? '+$' + parseInt(selectedColor.dataset.price).toLocaleString() : 'Included'}</span>
      `;
      
      document.querySelectorAll('.summary-item')[1].innerHTML = `
        <span>${selectedWheel.querySelector('span:first-child').textContent}</span>
        <span>${selectedWheel.dataset.price > 0 ? '+$' + parseInt(selectedWheel.dataset.price).toLocaleString() : 'Included'}</span>
      `;
      
      document.querySelectorAll('.summary-item')[2].innerHTML = `
        <span>${selectedInterior.querySelector('span:first-child').textContent}</span>
        <span>${selectedInterior.dataset.price > 0 ? '+$' + parseInt(selectedInterior.dataset.price).toLocaleString() : 'Included'}</span>
      `;
      
      document.querySelectorAll('.summary-item')[3].innerHTML = `
        <span>${selectedDrivetrain.querySelector('h3').textContent}</span>
        <span>${selectedDrivetrain.dataset.price > 0 ? '+$' + parseInt(selectedDrivetrain.dataset.price).toLocaleString() : 'Included'}</span>
      `;
      
      // Calculate total
      total += parseInt(selectedColor.dataset.price);
      total += parseInt(selectedWheel.dataset.price);
      total += parseInt(selectedInterior.dataset.price);
      total += parseInt(selectedDrivetrain.dataset.price);
      
      // Update total price
      document.querySelector('.summary-price').textContent = '$' + total.toLocaleString();
      document.querySelector('.summary-total span:last-child').textContent = '$' + total.toLocaleString();
    }

    // Close button
    document.querySelector('.close-btn')?.addEventListener('click', function() {
      window.close();
    });

    // Initialize
    showCurrentSection();
    updateOrderSummary();
  }

  // Order buttons - open new page
  document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.textContent.includes('Order') || btn.textContent.includes('Order Now') || btn.textContent.includes('Order Tesla')) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('order.html', '_blank');
      });
    }
  });

  // Verification modal
  document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.textContent.includes('Verify')) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('verificationModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    }
  });

  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', function() {
      document.getElementById('verificationModal').style.display = 'none';
      document.getElementById('customizationModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  });

  document.getElementById('closeSuccessModal')?.addEventListener('click', function() {
    document.getElementById('successModal').style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  document.querySelectorAll('.file-input').forEach(input => {
    input.addEventListener('change', function(e) {
      const file = e.target.files[0];
      const uploadBox = this.closest('.upload-box');
      const side = this.dataset.side;
      
      if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
          uploadBox.classList.add('preview');
          uploadBox.innerHTML = `
            <img src="${e.target.result}" alt="License ${side}">
            <div class="file-info">${file.name}</div>
          `;
        }
        
        reader.readAsDataURL(file);
      }
    });
  });

  // Firebase initialization
  if (typeof firebase !== 'undefined') {
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const storage = firebase.storage();

    document.getElementById('verificationForm')?.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const ssn = document.getElementById('ssn').value;
      const verificationType = document.getElementById('verificationType').value;
      
      const licenseFront = document.querySelector('#licenseFront input[type="file"]').files[0];
      const licenseBack = document.querySelector('#licenseBack input[type="file"]').files[0];
      
      try {
        const frontRef = storage.ref(`verifications/${Date.now()}_front.jpg`);
        const backRef = storage.ref(`verifications/${Date.now()}_back.jpg`);
        
        const frontSnapshot = await frontRef.put(licenseFront);
        const backSnapshot = await backRef.put(licenseBack);
        
        const frontUrl = await frontSnapshot.ref.getDownloadURL();
        const backUrl = await backSnapshot.ref.getDownloadURL();
        
        await db.collection('verifications').add({
          fullName,
          email,
          phone,
          ssnLast4: ssn,
          verificationType,
          licenseFront: frontUrl,
          licenseBack: backUrl,
          status: 'pending',
          submittedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
          
        document.getElementById('verificationModal').style.display = 'none';
        document.getElementById('successModal').style.display = 'block';

        this.reset();
        document.querySelectorAll('.upload-box').forEach(box => {
          box.classList.remove('preview');
          box.innerHTML = `
            <i class="fas fa-id-card"></i>
            <span>Driver's License (${box.id === 'licenseFront' ? 'Front' : 'Back'})</span>
            <input type="file" accept="image/*" class="file-input" data-side="${box.id === 'licenseFront' ? 'front' : 'back'}" required>
          `;
        });
        
      } catch (error) {
        console.error('Error submitting verification:', error);
        alert('There was an error submitting your verification. Please try again.');
      }
    });
  }
});