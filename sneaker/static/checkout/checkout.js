document.addEventListener('DOMContentLoaded', () => {
    // Initialize checkout display
    updateCheckoutDisplay(cart.items);

    // Form validation and submission
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.addEventListener('submit', handleCheckoutSubmission);

    // Card number formatting
    const cardInput = document.getElementById('cardNumber');
    cardInput.addEventListener('input', formatCardNumber);

    // Expiry date formatting
    const expiryInput = document.getElementById('expiry');
    expiryInput.addEventListener('input', formatExpiryDate);
});

function updateCheckoutDisplay(items) {
    const orderItems = document.getElementById('orderItems');
    const { subtotal, tax, total } = cart.calculateTotals();

    // Update order items
    orderItems.innerHTML = items.map(item => `
        <div class="order-item">
            <span>${item.name} × ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');

    // Update totals
    document.getElementById('checkoutSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkoutTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;
}

function handleCheckoutSubmission(e) {
    e.preventDefault();
    
    // Basic form validation
    const requiredFields = ['fullName', 'email', 'address', 'city', 'zipCode', 'cardNumber', 'expiry', 'cvv'];
    const isValid = requiredFields.every(field => {
        const input = document.getElementById(field);
        const isFieldValid = input.value.trim() !== '';
        input.classList.toggle('error', !isFieldValid);
        return isFieldValid;
    });

    if (isValid) {
        // Simulate order processing
        alert('Order placed successfully! Thank you for your purchase.');
        window.location.href = 'index.html';
    }
}

function formatCardNumber(e) {
    let value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
}

function formatExpiryDate(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }
    e.target.value = value;
}