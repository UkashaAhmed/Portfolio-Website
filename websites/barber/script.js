// Gallery lightbox functionality
function openLightbox(index) {
    const galleryItems = [
        'Classic Fade - A timeless look with precision fading',
        'Beard Sculpting - Expert beard shaping and styling',
        'Hot Shave - Traditional straight razor shave experience',
        'Modern Style - Contemporary cuts for the modern man',
        'Line Up - Sharp, clean edge work',
        'Business Cut - Professional styling for the workplace'
    ];
    
    alert(`Gallery Image: ${galleryItems[index]}\n\nThis would open a full-screen lightbox view with:\n• High-resolution image\n• Before/After comparison\n• Service details\n• Book this style button`);
}

// Barber booking functionality
document.addEventListener('DOMContentLoaded', function() {
    // Book with specific barber
    const bookBtns = document.querySelectorAll('.book-btn');
    bookBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const barberName = this.closest('.barber-card').querySelector('h3').textContent;
            const barberTitle = this.closest('.barber-card').querySelector('.barber-title').textContent;
            alert(`Book with ${barberName}\n${barberTitle}\n\nThis would open the booking page with:\n• Available time slots\n• Service selection\n• ${barberName}'s specialties\n• Customer reviews`);
        });
    });

    // Service row interactions
    const serviceRows = document.querySelectorAll('.service-row');
    serviceRows.forEach(row => {
        row.addEventListener('click', function() {
            const serviceName = this.querySelector('h3').textContent;
            const serviceDesc = this.querySelector('p').textContent;
            const servicePrice = this.querySelector('.service-price').textContent;
            alert(`${serviceName}\n${servicePrice}\n\n${serviceDesc}\n\nDuration: 30-45 minutes\nClick "Book Now" to schedule this service.`);
        });
    });

    // Gallery item hover effect enhancement
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.style.cursor = 'pointer';
    });
});
