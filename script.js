var typed = new Typed(".typewriter-text",
    {
        strings: [ " ",
            "Creative Designer!",
        ],
        typeSpeed: 100,
        backspeed: 70, 
    }
)


const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
const totalItems = items.length;

function updateCarouselPosition() {
    const itemWidth = items[0].getBoundingClientRect().width;
    const newPosition = -currentIndex * itemWidth;
    track.style.transform = `translateX(${newPosition}px)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the start
    }
    updateCarouselPosition();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; // Loop back to the end
    }
    updateCarouselPosition();
});