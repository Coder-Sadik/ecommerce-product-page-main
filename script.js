const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("close-icon");
const overlay = document.getElementById("overlay");

// Function to toggle the nav menu
const toggleMenu = () => {
	navMenu.classList.toggle("active");
	overlay.classList.toggle("active");
};

// Toggle menu on hamburger click
hamburger.addEventListener("click", toggleMenu);

// Toggle menu on clicking the close icon or overlay
closeIcon.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// img slider
// let currentIndex = 0;
// const images = [
// 	"image-product-1.jpg",
// 	"image-product-2.jpg",
// 	"image-product-3.jpg",
// 	"image-product-4.jpg",
// ];

// const changeImage = (direction) => {
// 	currentIndex += direction;
// 	if (currentIndex < 0) {
// 		currentIndex = images.length - 1;
// 	} else if (currentIndex >= images.length) {
// 		currentIndex = 0;
// 	}
// 	document.getElementById("slider-image").src = images[currentIndex];
// };
