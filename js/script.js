const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("usuarios")) || [];

const setLocalStorage = (usuarios) =>
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

const createClient = (client) => {
  const usuarios = getLocalStorage();
  usuarios.push(client);
  setLocalStorage(usuarios);
};

const clickUser = () => {
  if (window.location.href.includes("/pages/")) {
    location.href = "../pages/registeredAnimals.html";
  } else {
    location.href = "./pages/registeredAnimals.html";
  }
};

const clickLogo = document.getElementById("image-logo");
clickLogo.addEventListener("click", () => {
  if (window.location.href.includes("/pages/")) {
    location.href = "../index.html";
  } else {
    location.href = "./index.html";
  }
});

const listedMenu = document.getElementsByClassName("listed-menu");
const closeMenu = document.getElementsByClassName("close-menu");
const responsiveMenu = document.getElementsByClassName("responsive-menu");

listedMenu[0].addEventListener("click", () => {
  listedMenu[0].style.display = "none";
  closeMenu[0].style.display = "block";
  responsiveMenu[0].classList.add("show");
  responsiveMenu[0].classList.remove("hide");
});
closeMenu[0].addEventListener("click", () => {
  closeMenu[0].style.display = "none";
  listedMenu[0].style.display = "block";
  responsiveMenu[0].classList.add("hide");
  responsiveMenu[0].classList.remove("show");
});

const changePage = (page) => {
  switch (page) {
    case "start":
      if (window.location.href.includes("/pages/")) {
        location.href = "../index.html";
      } else {
        location.href = "./index.html";
      }
      break;
    case "adopt":
      if (window.location.href.includes("/pages/")) {
        location.href = "../pages/wannaAdopt.html";
      } else {
        location.href = "./pages/wannaAdopt.html";
        ValidationData();
      }
      break;
    case "contactus":
      if (window.location.href.includes("/pages/")) {
        location.href = "../pages/whoWeAre.html";
      } else {
        location.href = "./pages/whoWeAre.html";
      }
      break;
    case "login":
      if (window.location.href.includes("/pages/")) {
        location.href = "../pages/loginPage.html";
      } else {
        location.href = "./pages/loginPage.html";
      }
      break;
    case "btnDonate":
      let validation = false;
      if (localStorage.getItem("usuarios")) {
        getLocalStorage().forEach((item) => {
          if (item.logged) {
            validation = true;
          }
        });
      } else {
        changePage("login");
      }

      if (validation) {
        if (window.location.href.includes("/pages/")) {
          location.href = "../pages/wannaDonation.html";
        } else {
          location.href = "./pages/wannaDonation.html";
        }
      } else {
        changePage("login");
      }
      break;
    default:
      break;
  }
};

function showUser() {
  getLocalStorage().forEach((item) => {
    if (item.logged) {
      const statusLogin = document.getElementById("status-login");
      const statusLoginResponse = document.getElementById(
        "status-login-response"
      );
      let userCreated = false;
      if (userCreated === true) {
        document.getElementById("navItem").style.display = "block";
        document.getElementById("navItemResponse").style.display = "block";
        return;
      } else {
        document.getElementById("navItem").style.display = "none";
        document.getElementById("navItemResponse").style.display = "none";
        let userImage = document.createElement("img");
        userImage.src = ".././assets/user.svg";
        let arrow = document.createElement("img");
        arrow.src = ".././assets/caret-down.svg";

        let user = document.createElement("div");
        let userResponse = document.createElement("div");
        user.className = "content-user";
        user.onclick = clickUser;
        user.innerHTML = `<img class="icon-user" src="${userImage.src}"/><h4 id="name-user">${item.nameUser}</h4>`;

        userResponse.className = "content-user-response";
        userResponse.innerHTML = `<img src=".././assets/caret-right.svg"><img class="icon-user-response" src="${userImage.src}"/><h4 id="name-user-response">${item.nameUser}</h4>`;
        userResponse.onclick = clickUser;

        statusLogin.appendChild(user);
        statusLoginResponse.appendChild(userResponse);
        userCreated = true;
      }
    }
  });
}

showUser();

const ValidationData = () => {
  let validation = false;
  let itemLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
  itemLocal.forEach((item) => {
    if (item.email === inputEmail.value && item.password === inputPass.value) {
      item.logged = true;
      validation = true;
      setLocalStorage(itemLocal);
    }
  });

  if (validation) {
    location.href = "../index.html";
  } else {
    document.getElementById("incorrect").style.display = "flex";
    setTimeout(() => {
      document.getElementById("incorrect").style.display = "none";
    }, 2000);
  }
};

function userAnimals() {
  let animalList = [];
  let itemLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
  itemLocal.forEach((item) => {
    for (let i = 0; i < item.animals.length; i++) {
      animalList.push(item.animals[i]);
    }
  });

  return animalList;
}

function homeCreatCard(
  animalNameParam,
  animalIMG,
  state,
  gender,
  postDate,
  classId,
  animalId,
  userId
) {
  let div = document.getElementById("div-card");

  const card = document.createElement("div");

  card.classList.add("card");
  card.classList.add(classId);
  card.onclick = () => {
    localStorage.setItem("animal", JSON.stringify([animalId, userId]));
    window.location.href = "../pages/infoAnimal.html";
  };

  const imageDiv = document.createElement("div");
  const cardContent = document.createElement("div");
  const animalName = document.createElement("h3");
  const animalContent = document.createElement("div");
  const animalGender = document.createElement("h3");
  const location = document.createElement("h3");
  const date = document.createElement("div");
  const dateText = document.createElement("h4");

  cardContent.classList.add("card-content");
  animalName.classList.add("animal-name");
  animalContent.classList.add("animal-content");
  animalGender.classList.add("animal-gender");
  location.classList.add("location");
  date.classList.add("date");
  imageDiv.classList.add("imgDiv");

  animalName.textContent = animalNameParam;
  animalGender.innerHTML = `<img src=".././assets/mars-and-venus.svg" style="width: 26px; height: 26px;" alt="">${gender}`;
  location.innerHTML = `<img src=".././assets/location.svg" style="width: 26px; height: 26px;" alt="">${state}`;
  dateText.textContent = `adicionado em ${postDate}`;
  imageDiv.style.backgroundImage = `url(${animalIMG})`;

  cardContent.appendChild(animalName);
  animalContent.appendChild(animalGender);
  animalContent.appendChild(location);
  cardContent.appendChild(animalContent);
  date.appendChild(dateText);
  card.appendChild(imageDiv);
  card.appendChild(cardContent);
  card.appendChild(date);
  div.appendChild(card);
}

function homeMatchAnimalsAndCards() {
  for (let i = 0; i < Math.min(3, userAnimals().length); i++) {
    homeCreatCard(
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
}

if (document.getElementById("animal-cards")) {
  homeMatchAnimalsAndCards();
}

const iconLoginPass = document.getElementById("pass-login-show");
const iconRegisterPass = document.getElementById("pass-register-show");
const iconEditPass = document.getElementById("pass-edit-show");

const registerEyePass = document.getElementById("registerPass");
const confirmEyePass = document.getElementById("confirmPass");
const loginEyePass = document.getElementById("inputPass");
const editPass = document.getElementById("edit-pass");
const editConfirmPass = document.getElementById("edit-confirm-pass");

function clickEye(eye) {
  switch (eye) {
    case "registerEye":
      showPassword(registerEyePass, iconRegisterPass);
      showPassword(confirmEyePass, iconRegisterPass);

      break;
    case "loginEye":
      showPassword(loginEyePass, iconLoginPass);

      break;
    case "editEye":
      showPassword(editPass, iconEditPass);
      showPassword(editConfirmPass, iconEditPass );

      break;
    default:
      break;
  }
}

function showPassword(senha, iconEye) {
  if (senha.type === "password") {
    senha.type = "text";
    iconEye.src = "../assets/hidePass.png";
  } else {
    senha.type = "password";
    iconEye.src = "../assets/showPass.png";
  }
}

function indexAnimalNotFound() {
  if (userAnimals().length) {
    document.getElementById("index-animalNotFound").style.display = "none";
  } else {
    document.getElementById("index-animalNotFound").style.display = "flex";
  }
}

if (document.getElementById("home")) {
  indexAnimalNotFound();
}
