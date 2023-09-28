// local storage
const getLocalStorage = () => JSON.parse(localStorage.getItem('usuarios')) || [];

const setLocalStorage = (usuarios) => localStorage.setItem("usuarios", JSON.stringify(usuarios));

const createClient = (client) => {
    const usuarios = getLocalStorage();
    usuarios.push(client);
    setLocalStorage(usuarios);
};



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

listedMenu[0].addEventListener('click', () => {
    document.getElementsByClassName('responsive-menu')[0].style.display = 'block'
    closeMenu[0].style.display = 'block'
    listedMenu[0].style.display = 'none'
})

closeMenu[0].addEventListener('click', () => {
    document.getElementsByClassName('responsive-menu')[0].style.display = 'none'
    closeMenu[0].style.display = 'none'
    listedMenu[0].style.display = 'block'
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



function a() {
    if (window.location.href.includes("/pages/")) {
        location.href = "../index.html";
    } else {
        location.href = "./index.html";
    }
}
function b() {
    if (window.location.href.includes("/pages/")) {
        location.href = "../pages/wannaAdopt.html"
    } else {
        location.href = "./pages/wannaAdopt.html"
        ValidationData()
    }
}

function c() {
    if (window.location.href.includes("/pages/")) {
        location.href = "../pages/whoWeAre.html"
    } else {
        location.href = "./pages/whoWeAre.html"
    }
}

function d() {
    if (window.location.href.includes("/pages/")) {
        location.href = "../pages/loginPage.html"
    } else {
        location.href = "./pages/loginPage.html"
    }
}

function e() {
    if (window.location.href.includes("/pages/")) {
        location.href = "../pages/wannaDonation.html"
    } else {
        location.href = "./pages/wannaDonation.html"
    }
}




function showUser() {
      getLocalStorage().forEach(item => {
        if (item.logged) {
            const statusLogin = document.getElementById('status-login')
            const statusLoginResponse = document.getElementById('status-login-response')
            let userCreated = false;
            if (userCreated === true) {
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
                user.innerHTML = `<img class="icon-user" src="${userImage.src}"/><h4 id="name-user">${item.email}</h4><img class="arrow-user" src="${arrow.src}" />`;
        
                userResponse.className = "content-user-response"
                userResponse.innerHTML = `<img src=".././assets/caret-right.svg"><img class="icon-user-response" src="${userImage.src}"/><h4 id="name-user-response">${item.email}</h4><img class="arrow-user-response" src="${arrow.src}" />`;
        
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
    getLocalStorage().forEach(item => {
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







