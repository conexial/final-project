const adminProviders =
document.getElementById("adminProvidersList");

let providers =
JSON.parse(localStorage.getItem("providers")) || [];

displayProviders();

function displayProviders() {
  adminProviders.innerHTML = "";

  if (providers.length === 0) {
    adminProviders.innerHTML =
      "<p>No providers registered.</p>";
  } else {
    providers.forEach(function (provider, index) {
      const card = document.createElement("div");

      card.classList.add("category-card");

      card.innerHTML = `
        <img src="${provider.image}" width="100">

        <h3>${provider.service}</h3>

        <p><strong>Name:</strong> ${provider.name}</p>

        <p><strong>Phone:</strong> ${provider.phone}</p>

        <p><strong>County:</strong> ${provider.county}</p>

        <p><strong>Sub County:</strong> ${provider.subCounty}</p>

        <div class="admin-buttons">
          <button class="btn" onclick="viewProvider(${index})">
            View
          </button>

          <button id="edit-btn"
        onclick="editProvider(${index})">
             Edit
           </button

          <button id="delete-btn" onclick="deleteProvider(${index})">
            Delete
          </button>

        <button class="btn"
      onclick="resetPassword(${index})">
              Reset Password
             </button>
      `;

      adminProviders.appendChild(card);
    });
  }
}

function deleteProvider(index) {
  if (confirm("Are you sure you want to delete this provider?")) {
    providers.splice(index, 1);
    localStorage.setItem("providers", JSON.stringify(providers));
    displayProviders();
  }
}

function viewProvider(index) {
  const provider = providers[index];

  alert(
    "Name: " + provider.name + "\n" +
    "Service: " + provider.service + "\n" +
    "Phone: " + provider.phone + "\n" +
    "Email: " + provider.email + "\n" +
    "Password: " + provider.password + "\n" +
    "County: " + provider.county + "\n" +
    "Sub County: " + provider.subCounty + "\n" +
    "Description: " + provider.description
  );
}

function editProvider(index) {

  let provider = providers[index];

  let newName =
  prompt("Edit Name", provider.name);

  let newPhone =
  prompt("Edit Phone", provider.phone);

  let newService =
  prompt("Edit Service", provider.service);

  if (newName && newPhone && newService) {

    provider.name = newName;
    provider.phone = newPhone;
    provider.service = newService;

    localStorage.setItem(
      "providers",
      JSON.stringify(providers)
    );

    displayProviders();

    alert("Provider updated successfully!");

  }

}

function resetPassword(index) {

  const newPassword =
  prompt("Enter new password");

  if (newPassword) {

    providers[index].password =
    newPassword;

    localStorage.setItem(
      "providers",
      JSON.stringify(providers)
    );

    alert("Password reset successful!");

  }

}