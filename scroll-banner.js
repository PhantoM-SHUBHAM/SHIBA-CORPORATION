let index = 0;
function autoScroll() {
    const images = document.getElementById('images');
    index = (index + 1) % 4;
    images.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(autoScroll, 3000);

// let index = 0;
// function autoScroll() {
//     const carousel = document.getElementById('carousel');
//     index = (index + 1) % 4;
//     carousel.style.transform = `translateX(-${index * 100}%)`;
// }
// setInterval(autoScroll, 3000);
