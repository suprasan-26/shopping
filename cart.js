document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    let totalPrice = 0;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p class="cart-empty">Your cart is empty. Start shopping now!</p>';
        return;
    }

    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="img/products/f1.jpg" alt="${item.productName}" class="item-image">
            <div class="item-details">
                <h2>${item.productName}</h2>
                <p>Price: $${item.productPrice}</p>
                <p>Quantity: <span class="item-quantity">${item.quantity}</span></p>
            </div>
            <button class="reduce-quantity" data-index="${index}">-</button>
            <button class="increase-quantity" data-index="${index}">+</button>
            <button class="remove-button" data-index="${index}">Remove</button>
        `;
        cartContainer.appendChild(itemElement);

        // Calculate total price
        totalPrice += item.productPrice * item.quantity;
    });

    totalPriceContainer.innerHTML = `<h3>Total Price: $${totalPrice.toFixed(2)}</h3>`;

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            removeFromCart(index);
        });
    });

    // Add event listeners to increase quantity buttons
    const increaseButtons = document.querySelectorAll('.increase-quantity');
    increaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            increaseQuantity(index);
        });
    });

    // Add event listeners to reduce quantity buttons
    const reduceButtons = document.querySelectorAll('.reduce-quantity');
    reduceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            reduceQuantity(index);
        });
    });
});

// Function to remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage

    // Refresh the cart page
    location.reload();
}

// Function to increase item quantity
function increaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += 1; // Increase quantity by 1
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage

    // Refresh the cart page
    location.reload();
}

// Function to reduce item quantity
function reduceQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index].quantity > 1) { // Prevent quantity from going below 1
        cart[index].quantity -= 1; // Decrease quantity by 1
        localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    } else {
        // Optionally, you can remove the item if quantity is 1
        removeFromCart(index);
    }

    // Refresh the cart page
    location.reload();
}