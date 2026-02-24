// Schedule consultation
document.querySelectorAll('.cta-btn, .cta-button').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Schedule Consultation\n\nThis would open a booking form with:\n• Available time slots\n• Practice area selection\n• Case details\n• Contact information\n\nFirst consultation is FREE!');
    });
});

// Practice area cards
document.querySelectorAll('.practice-card').forEach(card => {
    card.addEventListener('click', function() {
        const practiceArea = this.querySelector('h3').textContent;
        const description = this.querySelector('p').textContent;
        alert(`${practiceArea}\n\n${description}\n\nThis would show:\n• Detailed information\n• Related attorneys\n• Case studies\n• FAQ section`);
    });
    
    card.style.cursor = 'pointer';
});

// Attorney cards
document.querySelectorAll('.attorney-card').forEach(card => {
    card.addEventListener('click', function() {
        const name = this.querySelector('h3').textContent;
        const title = this.querySelector('.attorney-title').textContent;
        alert(`${name}\n${title}\n\nThis would show:\n• Full biography\n• Education & credentials\n• Case history\n• Contact directly\n• Schedule meeting`);
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
