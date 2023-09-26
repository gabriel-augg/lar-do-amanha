
function createUser(){
    const email= document.getElementById('inputEmail')
    const password = document.getElementById('inputPass')
    const animals = []
    const logged = true

    class User {
        constructor(email , name , password , animals, Logged){
            this.email = email
            this.name = name
            this.password = password
            this.animals = animals
            this.logged = logged
        }
    }

    let newUser = new User(email.value , name.value , password.value , animals , logged)
    createClient(newUser)
    console.log(newUser)
    console.log(animals)
}

function logar(){
    createUser()
}



function loginValidation() {
    let logado = true
    if (logado === true) {
        createUser()
        return
    } else {
        
    }
}




// local storage 

const getLocalStorage = () => JSON.parse(localStorage.getItem('usuarios')) || [];

const setLocalStorage = (usuarios) => localStorage.setItem("usuarios", JSON.stringify(usuarios));

const createClient = (client) => {
  const usuarios = getLocalStorage();
  usuarios.push(client);
  setLocalStorage(usuarios);
};


