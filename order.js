document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const model = urlParams.get('model');
    
    const models = {
      'model3': {
        name: 'Model 3',
        basePrice: 39990,
        subtitle: 'Long Range Rear-Wheel Drive',
        colors: [
          { name: 'Pearl White Multi-Coat', value: 'white', price: 0 },
          { name: 'Solid Black', value: 'black', price: 1000 },
          { name: 'Deep Blue Metallic', value: 'blue', price: 1000 },
          { name: 'Red Multi-Coat', value: 'red', price: 2000 }
        ],
        wheels: [
          { name: '18" Aero Wheels', value: 'aero', price: 0 },
          { name: '19" Sport Wheels', value: 'sport', price: 1500 }
        ],
        interiors: [
          { name: 'All Black Interior', value: 'black', price: 0 },
          { name: 'Black and White Interior', value: 'white', price: 1000 }
        ],
        drivetrains: [
          { 
            name: 'Rear-Wheel Drive', 
            value: 'rwd', 
            price: 0,
            range: '363 mi Range (EPA est.)',
            speed: '125 mph Top Speed',
            acceleration: '4.9 sec 0-60 mph'
          },
          { 
            name: 'All-Wheel Drive', 
            value: 'awd', 
            price: 8000,
            range: '341 mi Range (EPA est.)',
            speed: '125 mph Top Speed',
            acceleration: '4.2 sec 0-60 mph'
          },
          { 
            name: 'Performance', 
            value: 'performance', 
            price: 12000,
            range: '296 mi Range (EPA est.)',
            speed: '162 mph Top Speed',
            acceleration: '3.1 sec 0-60 mph'
          }
        ]
      },
      'modely': {
        name: 'Model Y',
        basePrice: 47990,
        subtitle: 'Long Range All-Wheel Drive',
        colors: [
          { name: 'Pearl White Multi-Coat', value: 'white', price: 0 },
          { name: 'Solid Black', value: 'black', price: 1000 },
          { name: 'Deep Blue Metallic', value: 'blue', price: 1000 },
          { name: 'Red Multi-Coat', value: 'red', price: 2000 }
        ],
        wheels: [
          { name: '19" Gemini Wheels', value: 'gemini', price: 0 },
          { name: '20" Induction Wheels', value: 'induction', price: 2000 }
        ],
        interiors: [
          { name: 'All Black Interior', value: 'black', price: 0 },
          { name: 'Black and White Interior', value: 'white', price: 1000 }
        ],
        drivetrains: [
          { 
            name: 'Long Range AWD', 
            value: 'awd', 
            price: 0,
            range: '330 mi Range (EPA est.)',
            speed: '135 mph Top Speed',
            acceleration: '4.8 sec 0-60 mph'
          },
          { 
            name: 'Performance', 
            value: 'performance', 
            price: 8000,
            range: '303 mi Range (EPA est.)',
            speed: '155 mph Top Speed',
            acceleration: '3.5 sec 0-60 mph'
          }
        ]
      },
      'models': {
        name: 'Model S',
        basePrice: 74990,
        subtitle: 'Long Range',
        colors: [
          { name: 'Pearl White Multi-Coat', value: 'white', price: 0 },
          { name: 'Solid Black', value: 'black', price: 1500 },
          { name: 'Deep Blue Metallic', value: 'blue', price: 1500 },
          { name: 'Red Multi-Coat', value: 'red', price: 2500 }
        ],
        wheels: [
          { name: '19" Tempest Wheels', value: 'tempest', price: 0 },
          { name: '21" Arachnid Wheels', value: 'arachnid', price: 4500 }
        ],
        interiors: [
          { name: 'All Black Interior', value: 'black', price: 0 },
          { name: 'Cream Interior', value: 'cream', price: 1500 },
          { name: 'Black and White Interior', value: 'white', price: 2000 }
        ],
        drivetrains: [
          { 
            name: 'Long Range', 
            value: 'longrange', 
            price: 0,
            range: '405 mi Range (EPA est.)',
            speed: '155 mph Top Speed',
            acceleration: '3.1 sec 0-60 mph'
          },
          { 
            name: 'Plaid', 
            value: 'plaid', 
            price: 20000,
            range: '396 mi Range (EPA est.)',
            speed: '200 mph Top Speed',
            acceleration: '1.99 sec 0-60 mph'
          }
        ]
      },
      'modelx': {
        name: 'Model X',
        basePrice: 79990,
        subtitle: 'Long Range',
        colors: [
          { name: 'Pearl White Multi-Coat', value: 'white', price: 0 },
          { name: 'Solid Black', value: 'black', price: 1500 },
          { name: 'Deep Blue Metallic', value: 'blue', price: 1500 },
          { name: 'Red Multi-Coat', value: 'red', price: 2500 }
        ],
        wheels: [
          { name: '20" Cyberstream Wheels', value: 'cyberstream', price: 0 },
          { name: '22" Turbine Wheels', value: 'turbine', price: 5500 }
        ],
        interiors: [
          { name: 'All Black Interior', value: 'black', price: 0 },
          { name: 'Cream Interior', value: 'cream', price: 1500 },
          { name: 'Black and White Interior', value: 'white', price: 2000 }
        ],
        drivetrains: [
          { 
            name: 'Long Range', 
            value: 'longrange', 
            price: 0,
            range: '348 mi Range (EPA est.)',
            speed: '155 mph Top Speed',
            acceleration: '3.8 sec 0-60 mph'
          },
          { 
            name: 'Plaid', 
            value: 'plaid', 
            price: 25000,
            range: '333 mi Range (EPA est.)',
            speed: '163 mph Top Speed',
            acceleration: '2.5 sec 0-60 mph'
          }
        ]
      },
      'cybertruck': {
        name: 'Cybertruck',
        basePrice: 60990,
        subtitle: 'Dual Motor All-Wheel Drive',
        colors: [
          { name: 'Stainless Steel', value: 'steel', price: 0 },
          { name: 'Satin Black Wrap', value: 'black', price: 6000 },
          { name: 'White Wrap', value: 'white', price: 6000 }
        ],
        wheels: [
          { name: '20" Cyber Wheels', value: 'cyber', price: 0 },
          { name: '20" All-Terrain Wheels', value: 'terrain', price: 3500 }
        ],
        interiors: [
          { name: 'Black Interior', value: 'black', price: 0 },
          { name: 'White Interior', value: 'white', price: 2000 }
        ],
        drivetrains: [
          { 
            name: 'Dual Motor AWD', 
            value: 'awd', 
            price: 0,
            range: '340 mi Range (EPA est.)',
            speed: '112 mph Top Speed',
            acceleration: '4.1 sec 0-60 mph'
          },
          { 
            name: 'Cyberbeast', 
            value: 'cyberbeast', 
            price: 20000,
            range: '320 mi Range (EPA est.)',
            speed: '130 mph Top Speed',
            acceleration: '2.6 sec 0-60 mph'
          }
        ]
      }
    };

    const selectedModel = models[model];
    
    document.querySelector('.order-header h1').textContent = selectedModel.name;
    document.querySelector('.order-subtitle').textContent = selectedModel.subtitle;
    document.querySelector('.order-price').textContent = `$${selectedModel.basePrice.toLocaleString()}`;
    
    const colorOptions = document.querySelector('.color-options');
    colorOptions.innerHTML = '';
    selectedModel.colors.forEach(color => {
      colorOptions.innerHTML += `
        <div class="color-option ${color.price === 0 ? 'selected' : ''}" data-color="${color.value}" data-price="${color.price}">
          <div class="color-sample" style="background-color: ${getColorValue(color.value)};"></div>
          <div class="color-info">
            <span>${color.name}</span>
            <span>${color.price > 0 ? '+ $' + color.price.toLocaleString() : 'Included'}</span>
          </div>
        </div>
      `;
    });
    
    const wheelOptions = document.querySelector('.wheel-options');
    wheelOptions.innerHTML = '';
    selectedModel.wheels.forEach(wheel => {
      wheelOptions.innerHTML += `
        <div class="wheel-option ${wheel.price === 0 ? 'selected' : ''}" data-wheel="${wheel.value}" data-price="${wheel.price}">
          <img src="images/wheel-${wheel.value}.jpg" alt="${wheel.name}">
          <div class="wheel-info">
            <span>${wheel.name}</span>
            <span>${wheel.price > 0 ? '+ $' + wheel.price.toLocaleString() : 'Included'}</span>
          </div>
        </div>
      `;
    });
    
    const interiorOptions = document.querySelector('.interior-options');
    interiorOptions.innerHTML = '';
    selectedModel.interiors.forEach(interior => {
      interiorOptions.innerHTML += `
        <div class="interior-option ${interior.price === 0 ? 'selected' : ''}" data-interior="${interior.value}" data-price="${interior.price}">
          <img src="images/interior-${interior.value}.jpg" alt="${interior.name}">
          <div class="interior-info">
            <span>${interior.name}</span>
            <span>${interior.price > 0 ? '+ $' + interior.price.toLocaleString() : 'Included'}</span>
          </div>
        </div>
      `;
    });
    
    const drivetrainOptions = document.querySelector('.drivetrain-options');
    drivetrainOptions.innerHTML = '';
    selectedModel.drivetrains.forEach(drivetrain => {
      drivetrainOptions.innerHTML += `
        <div class="drivetrain-option ${drivetrain.price === 0 ? 'selected' : ''}" data-drivetrain="${drivetrain.value}" data-price="${drivetrain.price}">
          <div class="drivetrain-icon">
            ${getDrivetrainIcon(drivetrain.value)}
          </div>
          <div class="drivetrain-info">
            <h3>${drivetrain.name}</h3>
            <p>${drivetrain.range}</p>
            <p>${drivetrain.speed}</p>
            <p>${drivetrain.acceleration}</p>
            <span>${drivetrain.price > 0 ? '+ $' + drivetrain.price.toLocaleString() : 'Included'}</span>
          </div>
        </div>
      `;
    });
    
    updateOrderSummary(selectedModel.basePrice);
    
    function getColorValue(color) {
      const colors = {
        'white': '#ffffff',
        'black': '#000000',
        'blue': '#2d5c88',
        'red': '#c00e0e',
        'steel': '#b3b3b3',
        'cream': '#f5f5dc'
      };
      return colors[color] || '#ffffff';
    }
    
    function getDrivetrainIcon(type) {
      if (type.includes('awd') || type.includes('dual')) {
        return '<i class="fas fa-car-side"></i><i class="fas fa-car-side"></i>';
      } else if (type.includes('performance') || type.includes('plaid') || type.includes('cyberbeast')) {
        return '<i class="fas fa-bolt"></i>';
      }
      return '<i class="fas fa-car"></i>';
    }
    
    function updateOrderSummary(basePrice) {
        let total = basePrice;
        
        const selectedColor = document.querySelector('.color-option.selected');
        const selectedWheel = document.querySelector('.wheel-option.selected');
        const selectedInterior = document.querySelector('.interior-option.selected');
        const selectedDrivetrain = document.querySelector('.drivetrain-option.selected');
        
        const summaryItems = document.querySelectorAll('.summary-item');
        
        if (selectedColor && summaryItems[0]) {
            summaryItems[0].innerHTML = `
            <span>${selectedColor.querySelector('span:first-child').textContent}</span>
            <span>${selectedColor.dataset.price > 0 ? '+$' + parseInt(selectedColor.dataset.price).toLocaleString() : 'Included'}</span>
            `;
            total += parseInt(selectedColor.dataset.price);
        }
        
        if (selectedWheel && summaryItems[1]) {
            summaryItems[1].innerHTML = `
            <span>${selectedWheel.querySelector('span:first-child').textContent}</span>
            <span>${selectedWheel.dataset.price > 0 ? '+$' + parseInt(selectedWheel.dataset.price).toLocaleString() : 'Included'}</span>
            `;
            total += parseInt(selectedWheel.dataset.price);
        }
        
        if (selectedInterior && summaryItems[2]) {
            summaryItems[2].innerHTML = `
            <span>${selectedInterior.querySelector('span:first-child').textContent}</span>
            <span>${selectedInterior.dataset.price > 0 ? '+$' + parseInt(selectedInterior.dataset.price).toLocaleString() : 'Included'}</span>
            `;
            total += parseInt(selectedInterior.dataset.price);
        }
        
        if (selectedDrivetrain && summaryItems[3]) {
            summaryItems[3].innerHTML = `
            <span>${selectedDrivetrain.querySelector('h3').textContent}</span>
            <span>${selectedDrivetrain.dataset.price > 0 ? '+$' + parseInt(selectedDrivetrain.dataset.price).toLocaleString() : 'Included'}</span>
            `;
            total += parseInt(selectedDrivetrain.dataset.price);
        }
        
        const summaryPrice = document.querySelector('.summary-price');
        const summaryTotal = document.querySelector('.summary-total span:last-child');
        
        if (summaryPrice) {
            summaryPrice.textContent = '$' + total.toLocaleString();
        }
        
        if (summaryTotal) {
            summaryTotal.textContent = '$' + total.toLocaleString();
        }
    }
    
    document.querySelectorAll('.color-option, .wheel-option, .interior-option, .drivetrain-option').forEach(option => {
      option.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.querySelectorAll('.selected').forEach(selected => {
          selected.classList.remove('selected');
        });
        this.classList.add('selected');
        updateOrderSummary(selectedModel.basePrice);
      });
    });
  });