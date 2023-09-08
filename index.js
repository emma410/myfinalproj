// const slideContainer = documet.querySelector(".slide-container");
// let currentIndex = 0;

// function showSlide(index){
//   const slideWidth = slideContainer.clientWidth;
//   slideContainer.style.transform = `translateX(-${index * slideWidth}px)`;
// }

// setInterval(function() {
//   currentIndex = (currentIndex + 1) % 3;
//   showSlide(currentIndex);
// }, 1000);
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
