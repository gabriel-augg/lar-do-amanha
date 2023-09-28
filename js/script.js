
const clickLogo = document.getElementById('image-logo')
clickLogo.addEventListener('click', () => {
    if (window.location.href.includes("/pages/")) {
        location.href = "../index.html";
    } else {
        location.href = "./index.html";
    }
})

const listedMenu = document.getElementsByClassName('listed-menu')
const closeMenu = document.getElementsByClassName('close-menu')
const responsiveMenu = document.getElementsByClassName('responsive-menu')

listedMenu[0].addEventListener('click', () => {
    listedMenu[0].style.display = 'none';
    closeMenu[0].style.display = 'block';
    responsiveMenu[0].classList.add('show');
    responsiveMenu[0].classList.remove('hide');
})
closeMenu[0].addEventListener('click', () => {
    closeMenu[0].style.display = 'none';
    listedMenu[0].style.display = 'block';
    responsiveMenu[0].classList.add('hide');
    responsiveMenu[0].classList.remove('show');
})





const changePage = (page) => {
    switch (page) {
        case 'start':
            a()
            break;
        case 'adopt':
            b()
            break;
        case 'contactus':
           c()
            break;
        case 'login':
            d()
            break;
        case 'btnDonate':
            e()
            break;
        default:
            break;
    }
}



function a (){
    if (window.location.href.includes("/pages/")) {
        location.href = "../index.html";
    } else {
        location.href = "./index.html";
    }
}
function b (){
    if (window.location.href.includes("/pages/")) {
        location.href = "../pages/wannaAdopt.html"
    } else {
        location.href = "./pages/wannaAdopt.html"
        ValidationData()
    }
}

function c (){
    if (window.location.href.includes("/pages/")) {
        location.href = "../pages/whoWeAre.html"
    } else {
        location.href = "./pages/whoWeAre.html"
    }
}

function d (){
    if (window.location.href.includes("/pages/")) {
        location.href = "../pages/loginPage.html"
    } else {
        location.href = "./pages/loginPage.html"
    }
}

function e (){
    if (window.location.href.includes("/pages/")) {
        location.href = "../pages/wannaDonation.html"
    } else {
        location.href = "./pages/wannaDonation.html"
    }
}


const statusLogin = document.getElementById('status-login')
const statusLoginResponse = document.getElementById('status-login-response')
let userCreated = false;
const nomeUser = undefined
function showUser() {
    if (userCreated === true) {
        return
    }
    var userImage = document.createElement('img');
    userImage.src = ".././assets/user.svg";
    var arrow = document.createElement('img');
    arrow.src = ".././assets/caret-down.svg";

    var user = document.createElement('div');
    var userResponse = document.createElement('div')
    user.className = "content-user"
    user.innerHTML = `<img class="icon-user" src="${userImage.src}"/><h4 id="name-user">${nomeUser}</h4><img class="arrow-user" src="${arrow.src}" />`;

    userResponse.className = "content-user-response"
    userResponse.innerHTML = `<img src=".././assets/caret-right.svg"><img class="icon-user-response" src="${userImage.src}"/><h4 id="name-user-response">${nomeUser}</h4><img class="arrow-user-response" src="${arrow.src}" />`;

    statusLogin.appendChild(user);
    statusLoginResponse.appendChild(userResponse);
    userCreated = true;

}




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
  





  
// local storage
const getLocalStorage = () => JSON.parse(localStorage.getItem('usuarios')) || [];

const setLocalStorage = (usuarios) => localStorage.setItem("usuarios", JSON.stringify(usuarios));

const createClient = (client) => {
  const usuarios = getLocalStorage();
  usuarios.push(client);
  setLocalStorage(usuarios);
};