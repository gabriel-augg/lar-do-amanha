
const clickLogo = document.getElementById('image-logo')
clickLogo.addEventListener('click', () => {
    if (window.location.href.includes("/pages/")) {
        location.href = "../index.html";
    } else {
        location.href = "./index.html";
    }
})




// Obtém a página atual a partir da URL
function getCurrentPage() {
    const path = window.location.pathname;
    const pageName = path.split('/').pop(); // Pega o nome da página a partir da URL
    return pageName;
}




const menuItem = document.querySelectorAll('.nav-item');

function selectMenu(event) {
    event.preventDefault();

    // Remove a classe 'selected' de todos os itens de menu
    menuItem.forEach((item) =>
        item.classList.remove('selected', 'selected-response')
    );

    // Adiciona a classe 'selected' ao item de menu clicado
    this.classList.add('selected', 'selected-response');

    const menuText = this.textContent;
    sessionStorage.setItem('selectedMenuItem', menuText); // Salva a classe selecionada

    // Verifica se o item clicado é diferente de "Entrar" antes de redirecionar
    if (!this.getAttribute('data-page') || this.getAttribute('data-page') !== 'login') {
        // Redireciona para a página correspondente
        const page = this.getAttribute('data-page');
        if (page) {
            window.location.href = `./pages/${page}.html`;
        }
    }
}

// Adicione um ouvinte de eventos de clique a cada item de menu
menuItem.forEach((item) =>
    item.addEventListener('click', selectMenu)
);

// Verifique se há um item de menu selecionado previamente salvo no sessionStorage
const selectedMenuText = sessionStorage.getItem('selectedMenuItem');

if (selectedMenuText) {
    // Encontre o item de menu com base no texto armazenado
    menuItem.forEach((item) => {
        if (item.textContent.includes(selectedMenuText)) {
            // Adicione a classe 'selected' ao item de menu previamente selecionado
            item.classList.add('selected', 'selected-response');
        }
    });
}


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
                document.getElementById('navItem').style.display = "none"
                document.getElementById('navItemResponse').style.display = "none"
                loginValidation()
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


const statusLogin = document.getElementById('status-login')
const statusLoginResponse = document.getElementById('status-login-response')
let userCreated = false;
const nomeUser = undefined
function createUser() {
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








