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

            const card =
                document.createElement("div");

            card.classList.add("category-card");
            card.innerHTML = `

       <img src="${provider.image}" width="100">

        <h3>${provider.service}</h3>

        <p><strong>Name:</strong>
        ${provider.name}</p>

        <p><strong>Phone:</strong>
        ${provider.phone}</p>

        <p><strong>County:</strong>
        ${provider.county}</p>

        <p><strong>Sub County:</strong>
        ${provider.subCounty}</p>

        <div class="admin-buttons">

  <button class="btn"
  onclick="viewProvider(${index})">

  View

  </button>

  <button class="btn delete-btn"
  onclick="deleteProvider(${index})">

  Delete

  </button>

</div>

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

const countySelect =
document.getElementById("county");

const subCountySelect =
document.getElementById("subCounty");

countySelect.addEventListener("change", function() {

  const selectedCounty = this.value;

  subCountySelect.innerHTML =
      '<option value="">Select Sub-County</option>';
    if (selectedCounty in subCounties) {
        subCounties[selectedCounty].forEach(function(subCounty) {
            const option = document.createElement("option");
            option.value = subCounty;
            option.textContent = subCounty;
            subCountySelect.appendChild(option);
        });
    }
});

function viewProvider(index) {

  const provider = providers[index];

  alert(
    "Name: " + provider.name + "\n" +
    "Service: " + provider.service + "\n" +
    "Phone: " + provider.phone + "\n" +
    "County: " + provider.county + "\n" +
    "Sub County: " + provider.subCounty + "\n" +
    "Description: " + provider.description
  );

}
