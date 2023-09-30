const userId = 0



function createUser() {
  const email = document.getElementById('inputEmail')
  const password = document.getElementById('inputPass')
  const nameUser = document
  const animals = []
  const logged = false
  class User {
    constructor(email, nameUser, password, animals, userId, Logged) {
      this.email = email
      this.nameUser = nameUser
      this.password = password
      this.animals = animals
      this.userId = userId
      this.logged = logged
    }
  }

  let newUser = new User(email.value, nameUser.value, password.value, animals, userId , logged)
  createClient(newUser)
  userId++
}

// function para cadastrar usuario 

function cadastrar (){
  createUser()

}

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

const modal = document.getElementById('modal')
const openModal = document.getElementById('openRegister')
const closeModal = document.getElementById('closeModal')

openModal.addEventListener('click', () => {
  modal.style.animation = 'openModal .5s'
  modal.showModal()
})


closeModal.addEventListener('click', () => {
  modal.close()
})

inputEmail.addEventListener('input', ()  => {
  errorEmail.style.display = 'none';
  inputEmail.style.outline = 'none';
})

inputPass.addEventListener('input', ()  => {
  errorPass.style.display = 'none';
  inputPass.style.outline = 'none';
})







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


