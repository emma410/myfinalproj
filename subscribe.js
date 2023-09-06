const form = document.getElementById('newsletter-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!name || !email || !phone) {
    errorMessage.textContent = 'Please fill out all required fields';
    return;
  }

  if (!isValidEmail(email)) {
    errorMessage.textContent = 'Please enter a valid email address';
    return;
  }

  // TODO: handle successful subscription
  displaySuccessMessage();
});

function isValidEmail(email) {
  // use a regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displaySuccessMessage() {
  errorMessage.style.color = 'green';
  errorMessage.textContent = 'You have successfully subscribed to our newsletter';
}