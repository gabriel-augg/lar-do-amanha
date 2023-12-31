let ids = JSON.parse(localStorage.getItem("id")) || { animalId: 0, id: 0 };

const goToTop = () => window.scrollTo(0, 0);

const fileInput = document.getElementById("img-file");
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  let img;

  if (file) {
    const reader = new FileReader();

    reader.onload = function (event) {
      img = event.target.result;
      localStorage.setItem("img", JSON.stringify(img));
    };

    reader.readAsDataURL(file);
  }
  let animalIMG = JSON.parse(localStorage.getItem("img"));
});

function back() {
  document.getElementById("modal-sucessfulDonation").style.display = "none";
  document.getElementsByTagName("body")[0].style.overflowY = "scroll";
  location.href = "../index.html";
}

function donateAnother() {
  document.getElementsByTagName("body")[0].style.overflowY = "scroll";
  document.getElementById("modal-sucessfulDonation").style.display = "none";
  document.getElementById("animal-name").value = "";
  document.getElementById("img-file").value = "";
  document.getElementById("animal-type").value = "animal";
  document.getElementById("phone").value = "";
  document.getElementById("zipcode").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "State";
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.getElementById("textarea").value = "";
  document.getElementById("upload-image").style.display = "none";
}

function getUserId() {
  let itemLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
  for (const item of itemLocal) {
    if (item.logged) {
      return item.id;
    }
  }
}

function donationCreate() {
  const animalName = document.getElementById("animal-name");
  const animalType = document.getElementById("animal-type");
  const phone = document.getElementById("phone");
  const zipCode = document.getElementById("zipcode");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const selectedGender = document.querySelector('input[name="gender"]:checked');
  const description = document.getElementById("textarea");
  const date = new Date();
  const currentDate = `${date.getDate()}/${ date.getMonth() + 1}/${date.getFullYear()}`;

  class Animal {
    constructor(
      animalName,
      animalIMG,
      animalType,
      gender,
      phone,
      zipCode,
      city,
      state,
      description,
      date,
      userId
    ) {
      this.animalName = animalName;
      this.animalIMG = animalIMG;
      this.animalType = animalType;
      this.gender = gender;
      this.phone = phone;
      this.zipCode = zipCode;
      this.city = city;
      this.state = state;
      this.date = date;
      this.userId = userId;
      this.description = description;
      this.animalId = ids.animalId;
    }
  }

  let animalIMG = JSON.parse(localStorage.getItem("img"));

  let newAnimal = new Animal(
    animalName.value,
    animalIMG,
    animalType.value,
    selectedGender.value,
    phone.value,
    zipCode.value,
    city.value,
    state.value,
    description.value,
    currentDate,
    getUserId()
  );

  let itemLocal = JSON.parse(localStorage.getItem("usuarios")) || [];

  itemLocal.forEach((item) => {
    if (item.logged) {
      item.animals.push(newAnimal);
      localStorage.setItem("usuarios", JSON.stringify(itemLocal));
    }
  });

  ids.animalId++;
  localStorage.setItem("id", JSON.stringify(ids));
}

let inputImage = document.getElementById("img-file");
let statusImage = false;

inputImage.addEventListener("change", (e) => {
  let divImage = document.getElementById("upload-image");

  if (statusImage === false) {
    let img = document.createElement("img");
    document.getElementById("upload-image").style.display = "block";
    img.src = URL.createObjectURL(e.target.files[0]);
    img.style.width = "100%";
    img.style.height = "80%";
    divImage.appendChild(img);
    statusImage = true;
  } else {
    let img = document.createElement("img");
    img.src = URL.createObjectURL(e.target.files[0]);
    img.style.width = "100%";
    img.style.height = "80%";

    let existingImg = divImage.querySelector("img");
    divImage.replaceChild(img, existingImg);
  }
});

function fixedZipCode() {
  var fixed = cepInput.value.replace(/[.-]/g, "");
  return fixed;
}

const cepInput = document.getElementById("zipcode");
const inputCity = document.getElementById("city");
const inputState = document.getElementById("state");

cepInput.addEventListener("blur", () => {
  fetch(`https://viacep.com.br/ws/${fixedZipCode()}/json/`)
    .then((res) => res.json())
    .then((res) => {
      let city = res.localidade;
      let state = res.uf;

      inputCity.value = city;
      inputState.value = state;
    });
});

const validationDonate = () => {
  const animalName = document.getElementById("animal-name");
  const animalType = document.getElementById("animal-type");
  const phone = document.getElementById("phone");
  const zipCode = document.getElementById("zipcode");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const description = document.getElementById("textarea");
  const imageAnimal = document.getElementById("upload-image");
  const selectedGender = document.querySelectorAll('input[name="gender"]');
  const genderRadio = Array.from(selectedGender).some((radio) => radio.checked);

  if (
    !animalName.value ||
    animalType.value === "animal" ||
    !phone.value ||
    !zipCode.value ||
    !city.value ||
    state.value === "state" ||
    !description.value ||
    !genderRadio ||
    imageAnimal.childElementCount <= 0
  ) {
    goToTop();
    document.getElementById("errorEmpty").style.display = "block";
  } else {
    document.getElementById("errorEmpty").style.display = "none";
    document.getElementById("modal-sucessfulDonation").style.display = "flex";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    donationCreate();
  }
};
