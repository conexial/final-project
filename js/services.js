const countyFilter = document.getElementById("countyFilter");
const subCountyFilter = document.getElementById("subCountyFilter");
const serviceSearch = document.getElementById("serviceSearch");
const providersList = document.getElementById("providersList");

const subCounties = {
  Nairobi: ["Westlands", "Kasarani", "Embakasi"],
  Kiambu: ["Ruiru", "Thika", "Kiambu Town"],
  Nakuru: ["Nakuru Town East", "Naivasha", "Gilgil"]
};

const providers = JSON.parse(localStorage.getItem("providers")) || [];

if (providers.length === 0) {
  providersList.innerHTML = "<p>No providers registered yet.</p>";
} else {
  providers.forEach(function(provider) {
    const card = document.createElement("div");

    card.classList.add("category-card");

    card.setAttribute("data-county", provider.county);
    card.setAttribute("data-subcounty", provider.subCounty);
    card.setAttribute("data-service", provider.service);

    card.innerHTML = `
      <img src="${provider.image}" width="100">

      <h3>${provider.service}</h3>

      <p><strong>Name:</strong> ${provider.name}</p>

      <p><strong>County:</strong> ${provider.county}</p>

      <p><strong>Sub County:</strong> ${provider.subCounty}</p>

      <p>${provider.description}</p>

      <a href="booking.html" class="btn">Book Now</a>
    `;

    providersList.appendChild(card);
  });
}

countyFilter.addEventListener("change", function () {
  const selectedCounty = countyFilter.value;

  subCountyFilter.innerHTML =
    '<option value="all">All Sub-Counties</option>';

  if (selectedCounty !== "all") {
    subCounties[selectedCounty].forEach(function(subCounty) {
      const option = document.createElement("option");
      option.value = subCounty;
      option.textContent = subCounty;
      subCountyFilter.appendChild(option);
    });
  }

  filterServices();
});

subCountyFilter.addEventListener("change", filterServices);
serviceSearch.addEventListener("keyup", filterServices);

function filterServices() {
  const selectedCounty = countyFilter.value;
  const selectedSubCounty = subCountyFilter.value;
  const searchText = serviceSearch.value.toLowerCase();

  const serviceCards = document.querySelectorAll(".category-card");

  serviceCards.forEach(function(card) {
    const cardCounty = card.getAttribute("data-county");
    const cardSubCounty = card.getAttribute("data-subcounty");
    const cardService = card.getAttribute("data-service").toLowerCase();

    const countyMatch =
      selectedCounty === "all" || cardCounty === selectedCounty;

    const subCountyMatch =
      selectedSubCounty === "all" || cardSubCounty === selectedSubCounty;

    const serviceMatch =
      cardService.includes(searchText);

    if (countyMatch && subCountyMatch && serviceMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}