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