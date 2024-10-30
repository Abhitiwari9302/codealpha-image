const images = [
    'IMAGES/IMAGE1.avif',
    'IMAGES/IMAGE2.jpeg',
    'IMAGES/IMAGE3.avif',
    'IMAGES/IMAGE4.jpeg',
    'IMAGES/IMAGE5.jpeg'
];

let currentIndex = 0;

const currentImage = document.getElementById('current-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbnails = document.querySelectorAll('.thumbnail');

// Function to update the displayed image
function updateImage(index) {
    currentImage.src = images[index];
}

// Event listener for Previous button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage(currentIndex);
});

// Event listener for Next button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage(currentIndex);
});

// Event listeners for thumbnails
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateImage(currentIndex);
    });
});
