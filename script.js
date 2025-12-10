// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form submission - example only
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // For production: Integrate with backend API or email service
  alert("Thank you for reaching out! We'll get back to you soon.");

  form.reset();
});