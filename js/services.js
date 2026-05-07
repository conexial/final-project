const countyFilter = document.getElementById("countyFilter");
const subCountyFilter = document.getElementById("subCountyFilter");
const serviceCards = document.querySelectorAll(".category-card");

const subCounties = {
  Nairobi: ["Westlands", "Kasarani", "Embakasi"],
  Kiambu: ["Ruiru", "Thika", "Kiambu Town"],
  Nakuru: ["Nakuru Town East", "Naivasha", "Gilgil"]
};

countyFilter.addEventListener("change", function () {
  const selectedCounty = countyFilter.value;

  subCountyFilter.innerHTML = '<option value="all">All Sub-Counties</option>';

  if (selectedCounty !== "all") {
    subCounties[selectedCounty].forEach(function (subCounty) {
      const option = document.createElement("option");
      option.value = subCounty;
      option.textContent = subCounty;
      subCountyFilter.appendChild(option);
    });
  }

  filterServices();
});

subCountyFilter.addEventListener("change", filterServices);

function filterServices() {
  const selectedCounty = countyFilter.value;
  const selectedSubCounty = subCountyFilter.value;

  serviceCards.forEach(function (card) {
    const cardCounty = card.getAttribute("data-county");
    const cardSubCounty = card.getAttribute("data-subcounty");

    const countyMatch = selectedCounty === "all" || cardCounty === selectedCounty;
    const subCountyMatch = selectedSubCounty === "all" || cardSubCounty === selectedSubCounty;

    if (countyMatch && subCountyMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

const providersList =
document.getElementById("providersList");

const providers =
JSON.parse(localStorage.getItem("providers")) || [];

if (providers.length === 0) {

  providersList.innerHTML =
    "<p>No providers registered yet.</p>";

} else {

  providers.forEach(function(provider) {

    const card =
    document.createElement("div");

    card.classList.add("category-card");

    card.innerHTML = `

      <img src="${provider.image}" width="100">

      <h3>${provider.service}</h3>

      <p><strong>Name:</strong>
      ${provider.name}</p>

      <p><strong>County:</strong>
      ${provider.county}</p>

      <p><strong>Sub County:</strong>
      ${provider.subCounty}</p>

      <p>${provider.description}</p>
      `;

    providersList.appendChild(card);

  });

}