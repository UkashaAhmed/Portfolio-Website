// Portfolio image click
document.querySelectorAll('.masonry-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        const category = this.querySelector('p').textContent;
        alert(`${title}\n${category}\n\nThis would open a lightbox gallery with:\n• Full-size images\n• Image details\n• Navigation between photos\n• Download options`);
    });
});

// Hero button
document.querySelector('.hero-btn')?.addEventListener('click', function() {
    const portfolioSection = document.querySelector('.portfolio-masonry');
    if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Contact button
document.querySelector('.contact-btn')?.addEventListener('click', function() {
    alert('Contact Form\n\nThis would open a form to:\n• Request a quote\n• Book a session\n• Discuss your photography needs\n• View availability');
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

// Add hover effect enhancement
document.querySelectorAll('.masonry-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
});
