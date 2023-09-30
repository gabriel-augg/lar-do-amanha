// local storage
const getLocalStorage = () => JSON.parse(localStorage.getItem('usuarios')) || [];

const setLocalStorage = (usuarios) => localStorage.setItem("usuarios", JSON.stringify(usuarios));

const createClient = (client) => {
    const usuarios = getLocalStorage();
    usuarios.push(client);
    setLocalStorage(usuarios);
};

const clickUser = () => {
    if (window.location.href.includes("/pages/")) {
        location.href = "../pages/registeredAnimals.html"
    } else {
        location.href = "./pages/registeredAnimals.html"
    }
}



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
            if (window.location.href.includes("/pages/")) {
                location.href = "../index.html";
            } else {
                location.href = "./index.html";
            }
            break;
        case 'adopt':
            if (window.location.href.includes("/pages/")) {
                location.href = "../pages/wannaAdopt.html"
            } else {
                location.href = "./pages/wannaAdopt.html"
                ValidationData()
            }
            break;
        case 'contactus':
            if (window.location.href.includes("/pages/")) {
                location.href = "../pages/whoWeAre.html"
            } else {
                location.href = "./pages/whoWeAre.html"
            }
            break;
        case 'login':
            if (window.location.href.includes("/pages/")) {
                location.href = "../pages/loginPage.html"
            } else {
                location.href = "./pages/loginPage.html"
            }
            break;
        case 'btnDonate':
            if (window.location.href.includes("/pages/")) {
                location.href = "../pages/wannaDonation.html"
            } else {
                location.href = "./pages/wannaDonation.html"
            }
            break;
        default:
            break;
    }
}



function showUser() {
    getLocalStorage().forEach(item => {
        if (item.logged) {
            const statusLogin = document.getElementById('status-login')
            const statusLoginResponse = document.getElementById('status-login-response')
            let userCreated = false;
            if (userCreated === true) {
                document.getElementById('navItem').style.display = 'block'
                document.getElementById('navItemResponse').style.display = 'block'
                return
            } else {
                document.getElementById('navItem').style.display = 'none'
                document.getElementById('navItemResponse').style.display = 'none'
                let userImage = document.createElement('img');
                userImage.src = ".././assets/user.svg";
                let arrow = document.createElement('img');
                arrow.src = ".././assets/caret-down.svg";

                let user = document.createElement('div');
                let userResponse = document.createElement('div')
                user.className = "content-user"
                user.onchange = clickUser
                user.innerHTML = `<img class="icon-user" src="${userImage.src}"/><h4 id="name-user">${item.nameUser}</h4>`;

                userResponse.className = "content-user-response"
                userResponse.innerHTML = `<img src=".././assets/caret-right.svg"><img class="icon-user-response" src="${userImage.src}"/><h4 id="name-user-response">${item.nameUser}</h4>`;

                statusLogin.appendChild(user);
                statusLoginResponse.appendChild(userResponse);
                userCreated = true;
            }
        }
    });
}

showUser()





// validação email e senha

const ValidationData = () => {
    let validation = false;
    let itemLocal = JSON.parse(localStorage.getItem('usuarios')) || [];
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





