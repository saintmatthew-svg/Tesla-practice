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

    energyCarousel.addEventListener(() => {
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

const carOptions = {
  model3: {
    name: "Model 3",
    basePrice: 39990,
    colors: [
      { name: "Pearl White", price: 0, image: "images/model3-white.jpg" },
      { name: "Solid Black", price: 1000, image: "images/model3-black.jpg" },
      { name: "Midnight Silver", price: 1500, image: "images/model3-silver.jpg" },
      { name: "Deep Blue", price: 1500, image: "images/model3-blue.jpg" },
      { name: "Red Multi-Coat", price: 2000, image: "images/model3-red.jpg" }
    ],
    wheels: [
      { name: "18\" Aero", price: 0, image: "images/wheel-aero.jpg" },
      { name: "19\" Sport", price: 1500, image: "images/wheel-sport.jpg" }
    ],
    interiors: [
      { name: "Black", price: 0, image: "images/interior-black.jpg" },
      { name: "White", price: 1000, image: "images/interior-white.jpg" }
    ]
  },
  modely: {
    name: "Model Y",
    basePrice: 47990,
    colors: [
      { name: "Pearl White", price: 0, image: "images/modely-white.jpg" },
      { name: "Solid Black", price: 1000, image: "images/modely-black.jpg" },
      { name: "Midnight Silver", price: 1500, image: "images/modely-silver.jpg" },
      { name: "Deep Blue", price: 1500, image: "images/modely-blue.jpg" },
      { name: "Red Multi-Coat", price: 2000, image: "images/modely-red.jpg" }
    ],
    wheels: [
      { name: "19\" Gemini", price: 0, image: "images/wheel-gemini.jpg" },
      { name: "20\" Induction", price: 2000, image: "images/wheel-induction.jpg" }
    ],
    interiors: [
      { name: "Black", price: 0, image: "images/interior-black.jpg" },
      { name: "White", price: 1000, image: "images/interior-white.jpg" }
    ]
  },
  models: {
    name: "Model S",
    basePrice: 74990,
    colors: [
      { name: "Pearl White", price: 0, image: "images/models-white.jpg" },
      { name: "Solid Black", price: 1500, image: "images/models-black.jpg" },
      { name: "Midnight Silver", price: 2000, image: "images/models-silver.jpg" },
      { name: "Deep Blue", price: 2000, image: "images/models-blue.jpg" },
      { name: "Red Multi-Coat", price: 2500, image: "images/models-red.jpg" }
    ],
    wheels: [
      { name: "19\" Tempest", price: 0, image: "images/wheel-tempest.jpg" },
      { name: "21\" Arachnid", price: 4500, image: "images/wheel-arachnid.jpg" }
    ],
    interiors: [
      { name: "Black", price: 0, image: "images/interior-black-premium.jpg" },
      { name: "Cream", price: 1500, image: "images/interior-cream.jpg" },
      { name: "White", price: 2000, image: "images/interior-white-premium.jpg" }
    ]
  },
  modelx: {
    name: "Model X",
    basePrice: 79990,
    colors: [
      { name: "Pearl White", price: 0, image: "images/modelx-white.jpg" },
      { name: "Solid Black", price: 1500, image: "images/modelx-black.jpg" },
      { name: "Midnight Silver", price: 2000, image: "images/modelx-silver.jpg" },
      { name: "Deep Blue", price: 2000, image: "images/modelx-blue.jpg" },
      { name: "Red Multi-Coat", price: 2500, image: "images/modelx-red.jpg" }
    ],
    wheels: [
      { name: "20\" Cyberstream", price: 0, image: "images/wheel-cyberstream.jpg" },
      { name: "22\" Turbine", price: 5500, image: "images/wheel-turbine.jpg" }
    ],
    interiors: [
      { name: "Black", price: 0, image: "images/interior-black-premium.jpg" },
      { name: "Cream", price: 1500, image: "images/interior-cream.jpg" },
      { name: "White", price: 2000, image: "images/interior-white-premium.jpg" }
    ]
  },
  cybertruck: {
    name: "Cybertruck",
    basePrice: 60990,
    colors: [
      { name: "Stainless Steel", price: 0, image: "images/cybertruck-steel.jpg" },
      { name: "Black Wrapped", price: 5000, image: "images/cybertruck-black.jpg" },
      { name: "White Wrapped", price: 5000, image: "images/cybertruck-white.jpg" }
    ],
    wheels: [
      { name: "20\" All-Terrain", price: 0, image: "images/wheel-allterrain.jpg" },
      { name: "22\" Cyberwheel", price: 3500, image: "images/wheel-cyberwheel.jpg" }
    ],
    interiors: [
      { name: "Black", price: 0, image: "images/interior-black-cyber.jpg" },
      { name: "White", price: 2000, image: "images/interior-white-cyber.jpg" }
    ]
  }
};

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.textContent.includes('Order') || btn.textContent.includes('Order Now') || btn.textContent.includes('Order Tesla')) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('customizationModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    }
  });

  document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('customizationModal').style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('customizationModal')) {
      document.getElementById('customizationModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  document.querySelectorAll('.select-model').forEach(btn => {
    btn.addEventListener('click', function() {
      const model = this.closest('.model-option').dataset.model;
      showCustomizationOptions(model);
    });
  });
});

function showCustomizationOptions(model) {
  const optionsContainer = document.getElementById('customizationOptions');
  const carData = carOptions[model];
  
  optionsContainer.innerHTML = '';
  
  const colorsSection = document.createElement('div');
  colorsSection.className = 'option-section';
  colorsSection.innerHTML = `
    <h3>Exterior Color</h3>
    <div class="option-choices" id="colorChoices"></div>
  `;
  
  const wheelsSection = document.createElement('div');
  wheelsSection.className = 'option-section';
  wheelsSection.innerHTML = `
    <h3>Wheels</h3>
    <div class="option-choices" id="wheelChoices"></div>
  `;
  
  const interiorsSection = document.createElement('div');
  interiorsSection.className = 'option-section';
  interiorsSection.innerHTML = `
    <h3>Interior</h3>
    <div class="option-choices" id="interiorChoices"></div>
  `;
  
  const finalizeSection = document.createElement('div');
  finalizeSection.className = 'finalize-order';
  finalizeSection.innerHTML = `
    <button class="btn btn-primary" id="finalizeOrder">Finalize Order</button>
    <div class="price-summary" style="margin-top: 20px; font-size: 18px;">
      <strong>Estimated Total: $<span id="totalPrice">${carData.basePrice.toLocaleString()}</span></strong>
    </div>
  `;
  
  optionsContainer.appendChild(colorsSection);
  optionsContainer.appendChild(wheelsSection);
  optionsContainer.appendChild(interiorsSection);
  optionsContainer.appendChild(finalizeSection);
  
  const colorChoices = document.getElementById('colorChoices');
  carData.colors.forEach((color, index) => {
    const choice = document.createElement('div');
    choice.className = 'option-choice' + (index === 0 ? ' selected' : '');
    choice.dataset.type = 'color';
    choice.dataset.price = color.price;
    choice.innerHTML = `
      <img src="${color.image}" alt="${color.name}">
      <h4>${color.name}</h4>
      <p>${color.price > 0 ? '+$' + color.price.toLocaleString() : 'Included'}</p>
    `;
    colorChoices.appendChild(choice);
  });
  
  const wheelChoices = document.getElementById('wheelChoices');
  carData.wheels.forEach((wheel, index) => {
    const choice = document.createElement('div');
    choice.className = 'option-choice' + (index === 0 ? ' selected' : '');
    choice.dataset.type = 'wheel';
    choice.dataset.price = wheel.price;
    choice.innerHTML = `
      <img src="${wheel.image}" alt="${wheel.name}">
      <h4>${wheel.name}</h4>
      <p>${wheel.price > 0 ? '+$' + wheel.price.toLocaleString() : 'Included'}</p>
    `;
    wheelChoices.appendChild(choice);
  });
  
  const interiorChoices = document.getElementById('interiorChoices');
  carData.interiors.forEach((interior, index) => {
    const choice = document.createElement('div');
    choice.className = 'option-choice' + (index === 0 ? ' selected' : '');
    choice.dataset.type = 'interior';
    choice.dataset.price = interior.price;
    choice.innerHTML = `
      <img src="${interior.image}" alt="${interior.name}">
      <h4>${interior.name}</h4>
      <p>${interior.price > 0 ? '+$' + interior.price.toLocaleString() : 'Included'}</p>
    `;
    interiorChoices.appendChild(choice);
  });
  
  optionsContainer.style.display = 'block';
  
  document.querySelectorAll('.option-choice').forEach(choice => {
    choice.addEventListener('click', function() {
      this.parentNode.querySelectorAll('.option-choice').forEach(sibling => {
        sibling.classList.remove('selected');
      });
      
      this.classList.add('selected');
      
      updateTotalPrice(model);
    });
  });
  
  document.getElementById('finalizeOrder').addEventListener('click', function() {
    alert('Thank you for your order! A Tesla representative will contact you shortly.');
    document.getElementById('customizationModal').style.display = 'none';
    document.body.style.overflow = 'auto';
  });
}

function updateTotalPrice(model) {
  const carData = carOptions[model];
  let total = carData.basePrice;
  
  const selectedColor = document.querySelector('#colorChoices .option-choice.selected');
  total += parseInt(selectedColor.dataset.price);
  
  const selectedWheel = document.querySelector('#wheelChoices .option-choice.selected');
  total += parseInt(selectedWheel.dataset.price);
  
  const selectedInterior = document.querySelector('#interiorChoices .option-choice.selected');
  total += parseInt(selectedInterior.dataset.price);
  
  document.getElementById('totalPrice').textContent = total.toLocaleString();
}


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

document.addEventListener('DOMContentLoaded', function() {
 
  document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.textContent.includes('Verify')) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('verificationModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    }
  });

  // Close modal buttons
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', function() {
      document.getElementById('verificationModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  });

  document.getElementById('closeSuccessModal').addEventListener('click', function() {
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

  document.getElementById('verificationForm').addEventListener('submit', async function(e) {
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
});