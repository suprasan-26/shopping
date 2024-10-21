// const bar = document.getElementById('bar');
// const nav = document.getElementById('navbar');
// const close = document.getElementById('close');
// // sproduct image swiper
// const main = document.getElementById('main-img');
// const small = document.getElementsByClassName('small-img');
// if(bar){
//     bar.addEventListener('click',()=>{
//         nav.classList.add('active')
//     })
// }
// if(close){
//     close.addEventListener('click',()=>{
//         close.classList.remove('active')
//     })
// }
// // going to sproduct and changing src
// function changeImage(src){
//     localStorage.setItem('clickedImage',src);
//     window.location.href = 'sproduct.html'
// }
// let clicked = localStorage.getItem('clickedImage');
// if(clicked){
//     main.src = clicked
// }

// // sproduct image swiper
//     small[0].onclick = function(){
//         main.src = small[0].src
//     }
//     small[1].onclick = function(){
//         main.src = small[1].src
//     }
//     small[2].onclick = function(){
//         main.src = small[2].src
//     }
//     small[3].onclick = function(){
//         main.src = small[3].src
//     }

//     const addToCartButtons = document.querySelectorAll('.add-to-cart');

//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const productId = button.getAttribute('data-product-id');
//             const productName = button.getAttribute('data-product-name');
//             const productPrice = button.getAttribute('data-product-price');
//             addToCart(productId, productName, productPrice);
//         });
//     });
    
//     function addToCart(productId, productName, productPrice) {
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
//         const existingProduct = cart.find(item => item.productId === productId);
        
//         if (existingProduct) {
//             existingProduct.quantity += 1; // Increase quantity if the product already exists
//         } else {
//             cart.push({ productId, productName, productPrice, quantity: 1 });
//         }
        
//         localStorage.setItem('cart', JSON.stringify(cart));
        
//         console.log('Cart after update:', cart); // Debugging log
//         alert(`${productName} added to cart!`);
//     }


// const bar = document.getElementById('bar');
// const nav = document.getElementById('navbar');
// const close = document.getElementById('close');

// // sproduct image swiper
// const main = document.getElementById('main-img');
// const small = document.getElementsByClassName('small-img');

// if (bar) {
//     bar.addEventListener('click', () => {
//         nav.classList.add('active');
//     });
// }

// if (close) {
//     close.addEventListener('click', () => {
//         nav.classList.remove('active'); // Update this to remove the 'active' class from the navbar
//     });
// }

// // going to sproduct and changing src
// function changeImage(src) {
//     localStorage.setItem('clickedImage', src);
//     window.location.href = 'sproduct.html';
// }

// let clicked = localStorage.getItem('clickedImage');
// if (clicked) {
//     main.src = clicked;
// }

// // sproduct image swiper
// for (let i = 0; i < small.length; i++) {
//     small[i].onclick = function() {
//         main.src = small[i].src;
//     }
// }

// // Add to Cart functionality
// const addToCartButtons = document.querySelectorAll('.add-to-cart');

// addToCartButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const productId = button.getAttribute('data-product-id');
//         const productName = button.getAttribute('data-product-name');
//         const productPrice = parseFloat(button.getAttribute('data-product-price')); // Convert to float for calculations
//         const productImage = button.getAttribute('data-product-image'); // Add image source if needed
//         addToCart(productId, productName, productPrice, productImage);
//     });
// });

// function addToCart(productId, productName, productPrice, productImage) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
//     // Check if the product already exists in the cart
//     const existingProduct = cart.find(item => item.productId === productId);
    
//     if (existingProduct) {
//         existingProduct.quantity += 1; // Increase quantity if the product already exists
//     } else {
//         // Add new product with initial quantity of 1
//         cart.push({ productId, productName, productPrice, image: productImage, quantity: 1 });
//     }
    
//     // Update localStorage with the new cart
//     localStorage.setItem('cart', JSON.stringify(cart));
    
//     console.log('Cart after update:', cart); // Debugging log
//     alert(`${productName} added to cart!`);
// }


const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

// sproduct image swiper
const main = document.getElementById('main-img');
const small = document.getElementsByClassName('small-img');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); // Update this to remove the 'active' class from the navbar
    });
}

// going to sproduct and changing src
function changeImage(src) {
    localStorage.setItem('clickedImage', src);
    window.location.href = 'sproduct.html';
}

let clicked = localStorage.getItem('clickedImage');
if (clicked) {
    main.src = clicked;
}

// sproduct image swiper
for (let i = 0; i < small.length; i++) {
    small[i].onclick = function() {
        main.src = small[i].src;
    }
}

// Add to Cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const productName = button.getAttribute('data-product-name');
        const productPrice = parseFloat(button.getAttribute('data-product-price')); // Convert to float for calculations
        const productImage = button.getAttribute('data-product-image'); // Get image source

        addToCart(productId, productName, productPrice, productImage);
    });
});

function addToCart(productId, productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.productId === productId);
    
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if the product already exists
    } else {
        // Add new product with initial quantity of 1
        cart.push({ productId, productName, productPrice, image: productImage, quantity: 1 });
    }
    
    // Update localStorage with the new cart
    localStorage.setItem('cart', JSON.stringify(cart));
    
    console.log('Cart after update:', cart); // Debugging log
    alert(`${productName} added to cart!`);
}
