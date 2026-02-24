// Menu item interactions
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        const itemName = this.querySelector('h4').textContent;
        const itemDesc = this.querySelector('p').textContent;
        const itemPrice = this.querySelector('.price').textContent;
        
        alert(`${itemName}\n${itemDesc}\n${itemPrice}\n\nThis would show:\n• Full ingredients list\n• Allergen information\n• Pairing suggestions\n• Add to order option`);
    });
    
    item.style.cursor = 'pointer';
    
    // Hover effect
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        this.style.transition = 'transform 0.3s';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Reserve button
document.querySelector('.cta-btn')?.addEventListener('click', function() {
    alert('Reservation System\n\nThis would open a form to:\n• Select date and time\n• Choose party size\n• Special requests\n• Dietary restrictions\n• Confirm booking');
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
