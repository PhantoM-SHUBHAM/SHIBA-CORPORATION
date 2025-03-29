let index = 0;
function autoScroll() {
    const carousel = document.getElementById('carousel');
    index = (index + 1) % 4;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(autoScroll, 3000);
