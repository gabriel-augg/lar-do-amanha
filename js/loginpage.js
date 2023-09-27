
function createUser() {
  const email = document.getElementById('inputEmail')
  const password = document.getElementById('inputPass')
  const nameUser = document
  const animals = []
  const logged = false

  class User {
    constructor(email, nameUser, password, animals, Logged) {
      this.email = email
      this.nameUser = nameUser
      this.password = password
      this.animals = animals
      this.logged = logged
    }
  }

  let newUser = new User(email.value, nameUser.value, password.value, animals, logged)
  createClient(newUser)
}

// function para cadastrar usuario 



// validação usuario 

const inputEmail = document.getElementById('inputEmail')
const inputPass = document.getElementById('inputPass')
const btnEnter = document.getElementById('btnEnter')
const errorEmail = document.getElementById('user-empty')
const errorPass = document.getElementById('pass-empty')

btnEnter.addEventListener('click', () => {
  switch (true) {
    case (inputEmail.value === "" && inputPass.value !== ""):
      execulteEmail()
      break;

    case (inputPass.value === "" && inputEmail.value !== ""):
      executePass()
      break;

    case (inputEmail.value === "" && inputPass.value === ""):
      executePass()
      execulteEmail()
      break;
    default:
      ValidationData();
  }
})


const executePass = () => {
  errorPass.style.display = 'block';
  inputPass.style.outline = '2px solid brown';
}


const execulteEmail = () => {
  errorEmail.style.display = 'block';
  inputEmail.style.outline = '2px solid brown';
}



inputEmail.addEventListener('input', ()  => {
  errorEmail.style.display = 'none';
  inputEmail.style.outline = 'none';
})

inputPass.addEventListener('input', ()  => {
  errorPass.style.display = 'none';
  inputPass.style.outline = 'none';
})




// validação email e senha

const ValidationData = () => {
  let validation = false;
  const itemLocal = getLocalStorage()
  itemLocal.forEach(item => {
    if (item.email === inputEmail.value && item.password === inputPass.value) {
      item.logged = true;
      validation = true;
      setLocalStorage(itemLocal);
    }
  });

  if (validation) {
    location.href = "../index.html";
  } else {
    console.log('usuario ou senha n encontrados')
  }
}



// aparecer e sumir senha

// function showPassword(senha) {
//   if (senha.type === 'password') {
//       senha.type = 'text';
//       olhoMostrar.src = './assets/esconder-senha.png';
//   } else {
//       senha.type = 'password';
//       olhoMostrar.src = './assets/mostrar-senha.png';
//   }
// }

// local storage 

const getLocalStorage = () => JSON.parse(localStorage.getItem('usuarios')) || [];

const setLocalStorage = (usuarios) => localStorage.setItem("usuarios", JSON.stringify(usuarios));


const createClient = (client) => {
  const usuarios = getLocalStorage();
  usuarios.push(client);
  setLocalStorage(usuarios);
};



