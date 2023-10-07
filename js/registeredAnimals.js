function saveUser() {
  let itemLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
  itemLocal.forEach((item) => {
    if (item.logged) {
      item.email = document.getElementById("edit-email").value;
      item.nameUser = document.getElementById("edit-name").value;
      item.password = document.getElementById("edit-pass").value;
      item.password = document.getElementById("edit-confirm-pass").value;
    }
  })
  localStorage.setItem("usuarios", JSON.stringify(itemLocal));
  document.getElementById("status-login").innerHTML = "";
  document.getElementById("status-login-response").innerHTML = "";
  showUser();
  disabled();
  document.getElementById("savedInfo").style.display = "flex";
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";
  setTimeout(() => {
    document.getElementById("savedInfo").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflowY = "scroll";
  }, 2000);
}

localStorage.setItem('img', JSON.stringify(''))
const fileInput = document.getElementById("img-file");
fileInput.addEventListener('change', (e) => {
    
    const file = fileInput.files[0]
    let imgResult;

    if (file) {
        const reader = new FileReader();

        reader.onload = function (event) {
            imgResult = event.target.result;
            localStorage.setItem('img', JSON.stringify(imgResult));
        };

        reader.readAsDataURL(file);
    }


    let divImage = document.getElementById('upload-image');
    divImage.innerHTML = ''
    let img = document.createElement('img');
    document.getElementById('upload-image').style.display = "block"
    img.src = URL.createObjectURL(e.target.files[0]);
    img.style.width = '100%';
    img.style.height = '100%';
    divImage.appendChild(img);

    
    
})

function saveAnimalInfo(){
    let itemLocal = JSON.parse(localStorage.getItem('usuarios')) || []
    let data = JSON.parse(localStorage.getItem('animalIdSave'))
    let animalIMG = JSON.parse(localStorage.getItem('img'))
    
    itemLocal.forEach(item => {
        item.animals.forEach(animal => {
            if(animal.animalId === data) {
                
                animal.animalName = document.getElementById('animal-name').value
                animal.phone = document.getElementById('phone').value
                animal.zipCode = document.getElementById('zipcode').value
                animal.city = document.getElementById('city').value
                animal.state = document.getElementById('state').value
                animal.gender = document.querySelector('input[name="gender"]:checked').value
                animal.description = document.getElementById('textarea').value
                animal.animalIMG = animalIMG
            }
        })
    })
    localStorage.setItem('usuarios', JSON.stringify(itemLocal))
    document.getElementById('savedInfo').style.display = 'flex'
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    setTimeout(() => {
        document.getElementById('savedInfo').style.display = 'none'
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
    },2000)
    disabled()
}

function editUser() {
  let itemLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
  itemLocal.forEach((item) => {
    if (item.logged) {
      document.getElementById("edit-email").value = item.email;
      document.getElementById("edit-name").value = item.nameUser;
      document.getElementById("edit-pass").value = item.password;
      document.getElementById("edit-confirm-pass").value = item.password;
    }
  });
}

function userAnimals() {
  let animalList = [];
  let itemLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
  itemLocal.forEach((item) => {
    if (item.logged) {
      animalList = item.animals;
    }
  });

  return animalList;
}

function showAnimalInfo(data) {
  localStorage.setItem("animalIdSave", JSON.stringify(data));

  let itemLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
  itemLocal.forEach((item) => {
    item.animals.forEach((animal) => {
      if (animal.animalId === data) {
        document.getElementById("animal-name").value = animal.animalName;
        document.getElementById("phone").value = animal.phone;
        document.getElementById("zipcode").value = animal.zipCode;
        document.getElementById("city").value = animal.city;
        document.getElementById("state").value = animal.state;
        let radioButtons = document.querySelectorAll('input[name="gender"]');
        for (var i = 0; i < radioButtons.length; i++) {
          if (radioButtons[i].value === animal.gender) {
            radioButtons[i].checked = true;
            break;
          }
        }
        document.getElementById("textarea").value = animal.description;
        let img = document.createElement("img");
        let div = document.getElementById("upload-image");
        div.innerHTML = "";
        img.style.width = "100%";
        img.style.height = "100%";
        img.src = animal.animalIMG;
        div.style.display = "block";
        div.appendChild(img);
      }
    });
  });
}

function closeModalDelete() {
  document.getElementById("deleteModal").style.display = "none";
  document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}

function clickDelte() {
  let animalId = JSON.parse(localStorage.getItem("animalDelete"));
  let itemLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
  itemLocal.forEach((item) => {
    if (item.logged) {
      let animalToDelete = item.animals.find(
        (animal) => animal.animalId === animalId
      );
      let index = item.animals.indexOf(animalToDelete);
      item.animals.splice(index, 1);
      localStorage.setItem("usuarios", JSON.stringify(itemLocal));
      document.getElementById("div-card-register").innerHTML = "";
      homeMatchAnimalsAndCards();
    }
  });
  document.getElementById("deleteModal").style.display = "none";
  document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}

function homeCreateCard(
  animalNameParam,
  animalIMG,
  state,
  gender,
  postDate,
  classId,
  animalId,
  userId
) {
  let div = document.getElementById("div-card-register");

  const card = document.createElement("div");

  card.classList.add("card-register");
  card.classList.add(classId);

  const imageDiv = document.createElement("div");
  const cardContent = document.createElement("div");
  const animalName = document.createElement("h3");
  const animalContent = document.createElement("div");
  const animalGender = document.createElement("h3");
  const location = document.createElement("h3");
  const date = document.createElement("div");
  const dateText = document.createElement("h4");
  const editAnimals = document.createElement("div");
  const editAnimal = document.createElement("div");
  const deleteAnimal = document.createElement("div");

  cardContent.classList.add("card-content-register");
  animalName.classList.add("animal-name-register");
  animalContent.classList.add("animal-content-register");
  animalGender.classList.add("animal-gender-register");
  location.classList.add("location-register");
  date.classList.add("date-register");
  imageDiv.classList.add("imgDiv");
  editAnimals.classList.add("edits-animals-register");
  editAnimal.classList.add("edit-animal-register");
  deleteAnimal.classList.add("delete-animal-register");

  editAnimal.onclick = () => {
    document.getElementById("animal-cards-register").style.display = "none";
    document.getElementById("animalEdit-section").style.display = "flex";

    showAnimalInfo(animalId);
  };

  deleteAnimal.onclick = () => {
    document.getElementById("deleteModal").style.display = "flex";
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    localStorage.setItem("animalDelete", JSON.stringify(animalId));
  };

  animalName.textContent = animalNameParam;
  animalGender.innerHTML = `<img src=".././assets/mars-and-venus.svg" style="width: 26px; height: 26px;" alt="">${gender}`;
  location.innerHTML = `<img src=".././assets/location.svg" style="width: 26px; height: 26px;" alt="">${state}`;
  editAnimal.innerHTML = `<img src="/assets/edit.png" style="width: 42px; height: 42px; cursor:pointer;" alt="">`;
  deleteAnimal.innerHTML = `<img src="/assets/delete.png" style="width: 32px; height: 42px; cursor:pointer;" alt="">`;
  dateText.textContent = `adicionado em ${postDate}`;
  imageDiv.style.backgroundImage = `url(${animalIMG})`;

  cardContent.appendChild(animalName);
  animalContent.appendChild(animalGender);
  animalContent.appendChild(location);
  cardContent.appendChild(animalContent);
  editAnimals.appendChild(editAnimal);
  editAnimals.appendChild(deleteAnimal);
  date.appendChild(dateText);
  card.appendChild(imageDiv);
  card.appendChild(cardContent);
  card.appendChild(editAnimals);
  card.appendChild(date);
  div.appendChild(card);
}

function homeMatchAnimalsAndCards() {
  if (userAnimals().length) {
    for (let i = 0; i < userAnimals().length; i++) {
      homeCreateCard(
        userAnimals()[i].animalName,
        userAnimals()[i].animalIMG,
        userAnimals()[i].state,
        userAnimals()[i].gender,
        userAnimals()[i].date,
        `animal${userAnimals()[i].animalId}`,
        userAnimals()[i].animalId,
        userAnimals()[i].userId
      );
    }
    document.getElementById("noAnimal").style.display = "none";
    document.getElementById("animal-cards-register").style.overflowY = "scroll";
  } else {
    document.getElementById("noAnimal").style.display = "flex";
    document.getElementById("animal-cards-register").style.overflowY = "hidden";
  }
}

function able() {
  let inputs = document.querySelectorAll(".able");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
  }
}

function disabled() {
  let inputs = document.querySelectorAll(".able");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }
}

function logOutClick() {
  let itemLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
  itemLocal.forEach((item) => {
    if (item.logged) {
      item.logged = false;
      setLocalStorage(itemLocal);
      location.href = "../index.html";
    }
  });
}

function closeModal() {
  document.getElementById("logOut-modal").style.display = "none";
  document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}

const logoutPage = () => {
  document.getElementById("logOut-modal").style.display = "flex";
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";
};

const config = () => {
  document.getElementById("content-edit").style.display = "flex";
  document.getElementById("animalEdit-section").style.display = "none";
  document.getElementById("animal-cards-register").style.display = "none";
  document.getElementById("config").style.backgroundColor = "#122633";
  document.getElementById("animalsRegister").style.backgroundColor = "";
  document.getElementById("nothingSelected").style.display = "none";

  editUser();
};

const animalsRegister = () => {
  document.getElementById("animal-cards-register").style.display = "block";
  document.getElementById("animalEdit-section").style.display = "none";
  document.getElementById("content-edit").style.display = "none";
  document.getElementById("div-card-register").innerHTML = "";
  homeMatchAnimalsAndCards();
  document.getElementById("animalsRegister").style.backgroundColor = "#122633";
  document.getElementById("config").style.backgroundColor = "";
  document.getElementById("nothingSelected").style.display = "none";
  disabled();
};
