// document.addEventListener('DOMContentLoaded', () => {
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartContainer = document.getElementById('cart-items');
//     const totalPriceContainer = document.getElementById('total-price');
//     let totalPrice = 0;

//     if (cartItems.length === 0) {
//         cartContainer.innerHTML = '<p class="cart-empty">Your cart is empty. Please add items to your cart!</p>';
//         return;
//     }

//     cartItems.forEach(item => {
//         const itemElement = document.createElement('div');
//         itemElement.classList.add('cart-item');
//         itemElement.innerHTML = `
//             <img src="${item.image}" alt="${item.productName}" class="item-image">
//             <div class="item-details">
//                 <h2>${item.productName}</h2>
//                 <p>Price: $${item.productPrice}</p>
//                 <p>Quantity: ${item.quantity}</p>
//             </div>
//         `;
//         cartContainer.appendChild(itemElement);

//         // Calculate total price
//         totalPrice += item.productPrice * item.quantity;
//     });

//     totalPriceContainer.innerHTML = `<h3>Total Price: $${totalPrice.toFixed(2)}</h3>`;
// });

// // Handle form submission
// document.getElementById('billing-form').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     // You can handle form submission logic here
//     alert('Thank you for your purchase!');
//     localStorage.removeItem('cart'); // Clear the cart after purchase
//     window.location.href = 'index.html'; // Redirect to home page or order confirmation page
// });




document.addEventListener('DOMContentLoaded', () => {
    const checkoutItems = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutContainer = document.getElementById('checkout-items');
    const totalContainer = document.getElementById('checkout-total');
    let totalPrice = 0;

    if (checkoutItems.length === 0) {
        checkoutContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    checkoutItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('checkout-item');
        itemElement.innerHTML = `
            <div class="item-details">
                <h4>${item.productName}</h4>
                <p>Price: $${item.productPrice} x ${item.quantity}</p>
            </div>
            <div class="item-price">$${(item.productPrice * item.quantity).toFixed(2)}</div>
        `;
        checkoutContainer.appendChild(itemElement);

        // Calculate total price
        totalPrice += item.productPrice * item.quantity;
    });

    totalContainer.innerHTML = `<strong>Total: $${totalPrice.toFixed(2)}</strong>`;
});
