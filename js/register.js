const county = document.getElementById("county");
const subCounty = document.getElementById("subCounty");

const subCounties = {
  Nairobi: ["Westlands", "Embakasi", "Kasarani"],
  Kiambu: ["Ruiru", "Thika", "Kiambu Town"],
  Nakuru: ["Nakuru Town East", "Naivasha", "Gilgil"]
};

county.addEventListener("change", function () {

  const selectedCounty = county.value;

  subCounty.innerHTML =
    '<option value="">Select Sub-County</option>';

  if (selectedCounty in subCounties) {

    subCounties[selectedCounty].forEach(function(area) {

      const option = document.createElement("option");

      option.value = area;
      option.textContent = area;

      subCounty.appendChild(option);

    });
  }
});

const profilePhoto =
document.getElementById("profilePhoto");

const previewImage =
document.getElementById("previewImage");

profilePhoto.addEventListener("change", function() {

  const file = this.files[0];

  if (file) {

    const reader = new FileReader();

    reader.addEventListener("load", function() {

      previewImage.src = reader.result;

    });

    reader.readAsDataURL(file);
  }

});