// Menu tabs functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const menuItems = document.querySelectorAll('.menu-item');

tabBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        // Add active to clicked button
        this.classList.add('active');
        
        const tabName = this.textContent;
        alert(`Showing ${tabName} menu\n\nIn a real application, this would filter the menu items to show only ${tabName.toLowerCase()}.`);
    });
});

// Menu item click
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        const itemName = this.querySelector('h3').textContent;
        const itemDesc = this.querySelector('p').textContent;
        const itemPrice = this.querySelector('.item-price').textContent;
        
        const addToCart = confirm(`${itemName}\n${itemDesc}\n${itemPrice}\n\nWould you like to add this to your order?`);
        
        if (addToCart) {
            alert(`✓ ${itemName} added to cart!\n\nThis would:\n• Add item to shopping cart\n• Update cart total\n• Show checkout option`);
        }
    });
    
    item.style.cursor = 'pointer';
});

// Hero button
document.querySelector('.hero-btn')?.addEventListener('click', function() {
    const menuSection = document.querySelector('.menu-section');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
