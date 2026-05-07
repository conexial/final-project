const adminProviders =
document.getElementById("adminProviders");

let providers =
JSON.parse(localStorage.getItem("providers")) || [];

displayProviders();
function displayProviders() {

  adminProviders.innerHTML = "";

  if (providers.length === 0) {

    adminProviders.innerHTML =
      "<p>No providers registered.</p>";

  } else {

    providers.forEach(function(provider, index) {

      const card =
      document.createElement("div");

      card.classList.add("category-card");

      card.innerHTML = `<h3>${provider.name}</h3>