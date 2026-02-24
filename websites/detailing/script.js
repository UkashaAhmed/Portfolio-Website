// Package selection
document.querySelectorAll('.select-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const packageCard = this.closest('.package-card');
        const packageName = packageCard.querySelector('h3').textContent;
        const packagePrice = packageCard.querySelector('.package-price').textContent;
        
        alert(`Selected: ${packageName}\n${packagePrice}\n\nThis would:\n• Add package to cart\n• Show booking calendar\n• Request vehicle information\n• Process payment`);
    });
});

// Quote button
document.querySelector('.cta-btn')?.addEventListener('click', function() {
    alert('Get a Quote\n\nThis would open a form to:\n• Select services needed\n• Vehicle type and condition\n• Preferred date/time\n• Contact information\n• Receive instant estimate');
});

// Before/After gallery
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const caption = this.querySelector('p').textContent;
        alert(`${caption}\n\nThis would open a gallery showing:\n• High-resolution before/after photos\n• Service details\n• Time taken\n• Products used`);
    });
    
    item.style.cursor = 'pointer';
});

// Contact cards
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        if (title.includes('Location')) {
            alert('Opening map...\n\nThis would show:\n• Interactive Google Maps\n• Directions\n• Street view\n• Nearby landmarks');
        } else if (title.includes('Hours')) {
            alert('Business Hours\n\nThis would show:\n• Detailed schedule\n• Holiday hours\n• Best times to visit\n• Online booking');
        } else if (title.includes('Contact')) {
            alert('Contact Options\n\nThis would show:\n• Call directly\n• Send email\n• Live chat\n• Social media links');
        }
    });
    
    card.style.cursor = 'pointer';
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
