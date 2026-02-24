// Search functionality
document.querySelector('.search-btn')?.addEventListener('click', function() {
    const searchInput = document.querySelector('.search-box input');
    if (searchInput.value.trim()) {
        alert(`Searching for properties: "${searchInput.value}"\n\nThis would show filtered results in a real application.`);
    } else {
        alert('Please enter a location or property type to search.');
    }
});

// View property details
document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const propertyCard = this.closest('.property-card');
        const propertyName = propertyCard.querySelector('h3').textContent;
        alert(`Viewing details for: ${propertyName}\n\nThis would open a detailed property page with:\n• Full photo gallery\n• Complete description\n• Virtual tour\n• Contact agent form`);
    });
});

// Contact agent
document.querySelectorAll('.contact-agent-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const agentCard = this.closest('.agent-card');
        const agentName = agentCard.querySelector('h3').textContent;
        alert(`Contacting ${agentName}\n\nThis would open a contact form to:\n• Schedule a viewing\n• Ask questions\n• Request property information`);
    });
});

// CTA button
document.querySelector('.cta-button')?.addEventListener('click', function() {
    alert('Opening consultation form...\n\nThis would show a form to:\n• Schedule a free consultation\n• Discuss your property needs\n• Get market analysis');
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
