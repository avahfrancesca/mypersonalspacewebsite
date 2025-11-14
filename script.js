document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const leftBtn = document.querySelector('.fa-angle-left');
    const rightBtn = document.querySelector('.fa-angle-right');
    const cards = document.querySelectorAll('.cards');
    
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 16;
    const totalCards = cards.length;
    
    const half = Math.floor(totalCards / 2);
    for (let i = 0; i < half; i++) {
        const clone = cards[i].cloneNode(true);
        carousel.appendChild(clone);
    }
    for (let i = totalCards - half; i < totalCards; i++) {
        const clone = cards[i].cloneNode(true);
        carousel.insertBefore(clone, carousel.firstChild);
    }
    

    carousel.scrollLeft = half * cardWidth;
    

    rightBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
    

    leftBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
    

    carousel.addEventListener('scroll', () => {
        const scrollLeft = carousel.scrollLeft;
        const startThreshold = (half - 1) * cardWidth; 
        const endThreshold = (totalCards + half) * cardWidth;
        
        if (scrollLeft <= startThreshold) {
            carousel.scrollLeft = (totalCards + half) * cardWidth - cardWidth;
        } else if (scrollLeft >= endThreshold) {
            carousel.scrollLeft = half * cardWidth;
        }
    });
});

const InfiniteScroll = () => {
    if (carousel.scrollleft ===0){
        carousel.scrollLeft = carousel.offsetWidth - ( 2 * carousel.offsetWidth);
    }
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.scrollLeft = carousel.offsetWidth;
    }

}
    carousel.addEventListener("scroll, InfiniteScroll");