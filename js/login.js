const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {

  e.preventDefault();

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  const errorMessage =
  document.getElementById("errorMessage");

  // DEFAULT USERS

  // ADMIN
  if (
    email === "admin@gmail.com" &&
    password === "admin123"
  ) {

    window.location.href = "admin.html";
  }

  // PROVIDER
  else if (
    email === "provider@gmail.com" &&
    password === "provider123"
  ) {

    window.location.href = "provider.html";
  }

  // CLIENT
  else if (
    email === "client@gmail.com" &&
    password === "client123"
  ) {

    window.location.href = "client.html";
  }

  else {

    errorMessage.textContent =
    "Invalid email or password";

    errorMessage.style.color = "red";
  }

});