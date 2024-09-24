const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("close-icon");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".nav-link");

//Function for selecting the active nav link
navLinks.forEach((navLink) => {
	navLink.addEventListener("click", () => {
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

// image names for carousel
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

//for active class in thumbnails
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail, index) => {
	thumbnail.addEventListener("click", () => {
		thumbnails.forEach((thumbnail) => {
			thumbnail.classList.remove("active");
		});
		thumbnail.classList.add("active");
		updateImage(index);
	});
});

//add to cart functionality
const addToCart = document.getElementById("add-to-cart");
const currentPrice = document.getElementById("current-price");
const calculation = document.getElementById("calculation");
const productList = document.querySelector(".product-list");

const price = parseFloat(currentPrice.innerText.replace("$", ""));
let currentQuantity = 0;
let total = 0;

// Hide all product items
const showEmptyMessage = () => {
	Array.from(productList.children).forEach((child) => {
		child.style.display = "none";
	});

	//add empty message
	const emptyMessage = document.createElement("p");
	emptyMessage.className = "empty-message";
	emptyMessage.textContent = "Your cart is empty";
	productList.appendChild(emptyMessage);
};

// Show all product items
const showProducts = () => {
	Array.from(productList.children).forEach((child) => {
		child.style.display = "flex";
	});

	// Remove the empty message if it exists
	const emptyMessage = productList.querySelector(".empty-message");
	if (emptyMessage) {
		productList.removeChild(emptyMessage);
	}

	//add price in the calculation class
	currentQuantity = parseInt(setQuantity.innerText);
	total = price * currentQuantity;
	calculation.innerHTML = `
		$${price} X ${currentQuantity} = <b>$${total}</b>
		`;
};

//add to cart button
addToCart.addEventListener("click", () => {
	currentQuantity = parseInt(setQuantity.innerText);
	if (currentQuantity <= 0) {
		setQuantity.innerText = 1;
		showProducts();
	} else {
		showProducts();
	}
});

//click on cart icon functionality
const cartIcon = document.getElementById("cart");
const cartContainer = document.querySelector(".cart-icon");
cartIcon.addEventListener("click", () => {
	cartContainer.classList.toggle("active");
});
showEmptyMessage();
