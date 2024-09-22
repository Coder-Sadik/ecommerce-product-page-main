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
