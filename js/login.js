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

  // ADMIN LOGIN
  if (
    email === "admin@gmail.com" &&
    password === "admin123"
  ) {

    window.location.href = "admin.html";
  }

  // USER LOGIN
  else if (
    email === "user@gmail.com" &&
    password === "user123"
  ) {

    window.location.href = "dashboard.html";
  }

  else {

    errorMessage.textContent =
    "Invalid email or password";

  }

});