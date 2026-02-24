// Image gallery lightbox
let currentImage = 0;
const images = document.querySelectorAll('.gallery-item');

function openLightbox(index) {
    currentImage = index;
    // Lightbox functionality would go here
    alert('Gallery image ' + (index + 1) + ' clicked');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
