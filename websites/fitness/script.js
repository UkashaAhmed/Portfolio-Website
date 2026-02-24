let currentSlide = 0;

function moveCarousel(direction) {
    const track = document.getElementById('trainerTrack');
    const cards = track.children;
    const totalCards = cards.length;
    
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = totalCards - 1;
    } else if (currentSlide >= totalCards) {
        currentSlide = 0;
    }
    
    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
}

// Auto-play carousel
setInterval(() => {
    moveCarousel(1);
}, 5000);
