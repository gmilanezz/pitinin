document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    const totalOriginalCards = 8;
    let index = 0;

    const getVisibleCards = () => {
        if (window.innerWidth <= 480) return 1;
        if (window.innerWidth <= 768) return 2;
        if (window.innerWidth <= 992) return 3;
        return 4;
    };

    const moveToIndex = (newIndex) => {
        const visible = getVisibleCards();
        const percent = (100 / visible) * newIndex;
        carousel.style.transform = `translateX(-${percent}%)`;
    };

    const updateCarousel = () => moveToIndex(index);

    nextBtn.addEventListener('click', () => {
        index++;
        if (index >= totalOriginalCards) {
            index = 0;
            carousel.style.transition = 'none';
            updateCarousel();
            void carousel.offsetWidth;
            carousel.style.transition = 'transform 0.5s ease-in-out';
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        index--;
        if (index < 0) {
            index = totalOriginalCards - 1;
            carousel.style.transition = 'none';
            updateCarousel();
            void carousel.offsetWidth;
            carousel.style.transition = 'transform 0.5s ease-in-out';
        }
        updateCarousel();
    });
    window.addEventListener('resize', () => {
        updateCarousel();
    });
    updateCarousel();
});