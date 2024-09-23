const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("close-icon");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".nav-link");

//Function for selecting the active nav link
navLinks.forEach((navLink) => {
	navLink.addEventListener("click", () => {
		console.log(navLink);
		navLinks.forEach((navLink) => {
			navLink.classList.remove("active");
		});
		navLink.classList.add("active");
	});
});

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

//quantity control
const setQuantity = document.getElementById("quantity");
let quantity = 0;
const quantityControl = (n) => {
	quantity += n;
	quantity >= 0 ? (setQuantity.innerText = quantity) : (quantity = 0);
};

//carousel
let images = [
	"image-product-1.jpg",
	"image-product-2.jpg",
	"image-product-3.jpg",
	"image-product-4.jpg",
];
const maxLength = images.length;
const sliderImage = document.getElementById("slider-image");

//update image of carousel
const updateImage = (n) => {
	sliderImage.src = "images/" + images[n];
};

//button controlled carousel
let currentIndex = 0;
const updateIndex = (n) => {
	currentIndex = (currentIndex + maxLength + n) % maxLength;
	updateImage(currentIndex);
};
