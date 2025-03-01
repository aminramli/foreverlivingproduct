// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Shop Now button alert
const shopNowBtn = document.getElementById('shop-now');
shopNowBtn.addEventListener('click', () => {
    alert('Redirecting to the shop page!');
});

// Add to Cart button functionality
const addToCartBtn = document.querySelector('.add-to-cart');
addToCartBtn.addEventListener('click', () => {
    alert('Aloe Vera Gel added to your cart!');
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});