
// Add to cart animation
const addToCartButtons = document.querySelectorAll('.product-card button');
addToCartButtons.forEach(button => {
  button.addEventListener('click', function () {
    this.innerHTML = '✓ Added';
    this.style.background = '#00ff88';
    this.style.color = '#1a1a1a';

    setTimeout(() => {
      this.innerHTML = 'Add to Cart';
      this.style.background = 'black';
      this.style.color = '#1a1a1a';
    }, 2000);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const cartCountElement = document.getElementById('cart-count');

  // Set initial cart count to 0 on page load
  cartCountElement.textContent = '0';

  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      let currentCount = parseInt(cartCountElement.textContent);
      currentCount += 1;
      cartCountElement.textContent = currentCount;
      // Optionally, you can add code here to update the server-side cart as well
    });
  });
});

// check if button pressed
$(document).on('click', '#add-cart', function (e) {
  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: "{% url 'cart_add' %}",
    data: {
      product_id: $('#add-cart').val(),
      csrftokenmiddel: '{{csrf_token}}',
      action: 'post'

    }

    // success: function (json) {
    //   console.log(jason)
    // }



  })


})
