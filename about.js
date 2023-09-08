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

let slidIndex = 0;
showSlids();

function showSlids() {
  let i;
  let slids = document.getElementsByClassName("mySlidees");
  for (i = 0; i < slids.length; i++) {
    slids[i].style.display = "none";
  }
  slidIndex++;
  if (slidIndex > slids.length) {slidIndex = 1}
  slids[slidIndex-1].style.display = "block";
  setTimeout(showSlids, 2000); // Change image every 2 seconds
}

let sliIndex = 0;
showSlis();

function showSlis() {
  let i;
  let slis = document.getElementsByClassName("mySlideees");
  for (i = 0; i < slis.length; i++) {
    slis[i].style.display = "none";
  }
  sliIndex++;
  if (sliIndex > slis.length) {sliIndex = 1}
  slis[sliIndex-1].style.display = "block";
  setTimeout(showSlis, 2000); // Change image every 2 seconds
}

let slIndex = 0;
showSls();

function showSls() {
  let i;
  let sls = document.getElementsByClassName("mySlideeees");
  for (i = 0; i < sls.length; i++) {
    sls[i].style.display = "none";
  }
  slIndex++;
  if (slIndex > sls.length) {slIndex = 1}
  sls[slIndex-1].style.display = "block";
  setTimeout(showSls, 2000); // Change image every 2 seconds
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
