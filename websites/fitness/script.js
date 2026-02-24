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

// Program card interactions
document.addEventListener('DOMContentLoaded', function() {
    // Program card links
    const programLinks = document.querySelectorAll('.card-link');
    programLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const programName = this.closest('.program-card').querySelector('h3').textContent;
            alert(`Learn more about ${programName}\n\nThis would open detailed information about the program, including:\n• Training schedule\n• Expected results\n• Trainer assignments\n• Success stories`);
        });
    });

    // Pricing toggle
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const isYearly = this.textContent.includes('Yearly');
            const prices = document.querySelectorAll('.price');
            
            if (isYearly) {
                prices[0].innerHTML = '$79<span>/month</span>';
                prices[1].innerHTML = '$159<span>/month</span>';
                prices[2].innerHTML = '$279<span>/month</span>';
                alert('Yearly pricing activated! Save 20% on all plans.');
            } else {
                prices[0].innerHTML = '$99<span>/month</span>';
                prices[1].innerHTML = '$199<span>/month</span>';
                prices[2].innerHTML = '$349<span>/month</span>';
            }
        });
    });

    // Pricing plan selection
    const selectBtns = document.querySelectorAll('.select-btn');
    selectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const planName = this.closest('.price-card').querySelector('h3').textContent;
            const price = this.closest('.price-card').querySelector('.price').textContent;
            alert(`Selected: ${planName} Plan\nPrice: ${price}\n\nNext steps:\n1. Create your account\n2. Complete health assessment\n3. Schedule your first session\n4. Meet your trainer!`);
        });
    });
});
