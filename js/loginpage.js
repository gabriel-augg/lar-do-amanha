const email = document.getElementById("registerEmail");
const password = document.getElementById("registerPass");
const nameUser = document.getElementById("registerName");
const confirmPass = document.getElementById("confirmPass");
const modal = document.getElementById("modal");
const openModal = document.getElementById("openRegister");
const closeModal = document.getElementById("closeModal");
let ids = JSON.parse(localStorage.getItem("id")) || { animalId: 0, id: 0 };

function createUser() {
  const animals = [];
  const logged = false;

  class User {
    constructor(email, nameUser, password, animals) {
      this.email = email;
      this.nameUser = nameUser;
      this.password = password;
      this.animals = animals;
      this.id = ids.id;
      this.logged = logged;
    }
  }
  let newUser = new User(email.value, nameUser.value, password.value, animals);
  createClient(newUser);
  ids.id++;
  localStorage.setItem("id", JSON.stringify(ids));
}

const emailInvalid = document.getElementById("errorEmail");
const passInvalid = document.getElementById("errorPass");
const sendRegister = document.getElementById("send-register");
const enterPassword = document.getElementById("enter-password");
const registerName = document.getElementById("registerName");

password.addEventListener("input", () => {
  passInvalid.style.display = "none";
  document.getElementById("enter-password").style.display = "none";
  password.style.outline = "none";
  confirmPass.style.outline = "none";
});

confirmPass.addEventListener("input", () => {
  passInvalid.style.display = "none";
  document.getElementById("enter-password").style.display = "none";
  password.style.outline = "none";
  confirmPass.style.outline = "none";
});

email.addEventListener("input", () => {
  emailInvalid.style.display = "none";
  email.style.outline = "none";
});

registerName.addEventListener("input", () => {
  document.getElementById("erroName").style.display = "none";
  document.getElementById("registerName").style.outline = "none";
});

const closeSingUp = () => {
  modal.close();
  email.value = "";
  password.value = "";
  confirmPass.value = "";
  nameUser.value = "";
  passInvalid.style.display = "none";
  password.style.outline = "none";
  email.style.outline = "none";
};

sendRegister.addEventListener("click", () => {
  if (nameUser.value === "" && password.value === "" && email.value === "") {
    document.getElementById("erroName").style.display = "block";
    document.getElementById("enter-password").style.display = "block";
    emailInvalid.style.display = "block";
  } else if (nameUser.value === "" && password.value === "") {
    document.getElementById("erroName").style.display = "block";
    document.getElementById("enter-password").style.display = "block";
  } else if (nameUser.value === "" && email.value === "") {
    document.getElementById("erroName").style.display = "block";
    emailInvalid.style.display = "block";
  } else if (password.value === "" && email.value === "") {
    document.getElementById("enter-password").style.display = "block";
    emailInvalid.style.display = "block";
  } else {
    allEmpty();
  }
});

function checkName(name) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nameUser === name) {
      return true;
    }
  }
  return false;
}

function allEmpty() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  switch (true) {
    case !emailPattern.test(email.value):
      emailInvalid.style.display = "block";
      break;
    case password.value !== confirmPass.value:
      passInvalid.style.display = "block";
      break;
    case password.value === "":
      document.getElementById("enter-password").style.display = "block";
      break;
    case nameUser.value === "":
      document.getElementById("erroName").style.display = "block";
      break;
    case checkName(nameUser.value):
      document.getElementById("existingName").style.display = "block";
      break;
    default:
      document.getElementsByClassName("modalContent")[0].style.display = "none";
      document.getElementById("closeModal").style.display = "none";
      document.getElementById("sucessRegister").style.display = "block";
      createUser();
      setTimeout(() => {
        closeSingUp();
        document.getElementsByClassName("modalContent")[0].style.display =
          "block";
        document.getElementById("closeModal").style.display = "block";
        document.getElementById("sucessRegister").style.display = "none";
      }, 1500);
      break;
  }
}

const inputEmail = document.getElementById("inputEmail");
const inputPass = document.getElementById("inputPass");
const btnEnter = document.getElementById("btnEnter");
const errorEmail = document.getElementById("user-empty");
const errorPass = document.getElementById("pass-empty");

btnEnter.addEventListener("click", () => {
  switch (true) {
    case inputEmail.value === "" && inputPass.value !== "":
      execulteEmail();
      break;

    case inputPass.value === "" && inputEmail.value !== "":
      executePass();
      break;

    case inputEmail.value === "" && inputPass.value === "":
      executePass();
      execulteEmail();
      break;
    default:
      ValidationData();
  }
});

const executePass = () => {
  errorPass.style.display = "block";
  inputPass.style.outline = "2px solid brown";
};

const execulteEmail = () => {
  errorEmail.style.display = "block";
  inputEmail.style.outline = "2px solid brown";
};

openModal.addEventListener("click", () => {
  modal.style.animation = "openModal .5s";
  modal.showModal();
});

inputEmail.addEventListener("input", () => {
  errorEmail.style.display = "none";
  inputEmail.style.outline = "none";
});

inputPass.addEventListener("input", () => {
  errorPass.style.display = "none";
  inputPass.style.outline = "none";
});



