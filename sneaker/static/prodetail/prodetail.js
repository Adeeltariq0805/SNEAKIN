function changeImage(src) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => {
      thumb.classList.remove('active');
      if (thumb.src === src) {
        thumb.classList.add('active');
      }
    });
  }
  
  function selectColor(color) {
    document.querySelectorAll('.color-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`.color-btn.${color}`).classList.add('active');
  }
  
  function updateQuantity(change) {
    const quantityElement = document.getElementById('quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity = Math.max(1, quantity + change);
    quantityElement.textContent = quantity;
  }
  
  // Add to cart animation
  document.querySelector('.add-to-cart').addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 100);
  });
  
  // Buy now animation
  document.querySelector('.buy-now').addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 100);
  });

  function selectSize(size) {
    // Deselect all buttons
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => button.classList.remove('active'));
  
    // Select the clicked button
    const selectedButton = document.querySelector(`.size-btn[onclick="selectSize(${size})"]`);
    selectedButton.classList.add('active');
  
    // Update size somewhere if necessary
    console.log(`Selected size: ${size}`);
  }
  