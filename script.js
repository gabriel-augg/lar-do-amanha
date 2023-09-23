
const menuItem = document.querySelectorAll('.nav-item')
function selectMenu() {
    menuItem.forEach((item) =>
        item.classList.remove('selected', 'selected-response')
    )
    this.classList.add('selected', 'selected-response')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectMenu)
)




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
            location.href = "http://127.0.0.1:5500/index.html"
            break;
        case 'adopt':
            document.getElementById('navItem').style.display = "none"
            loginValidation()
            break;
        case 'contactus':

            break;
        case 'login':

            break;
        case 'btnDonate':

            break;

        default:
            break;
    }
}


const statusLogin = document.getElementById('status-login')
const statusLoginResponse = document.getElementById('status-login-response')
const nomeUser = prompt('digite seu nome')
function createUser() {
    var userImage = document.createElement('img');
    userImage.src = "./assets/user.svg";
    var arrow = document.createElement('img');
    arrow.src = "./assets/caret-down.svg";

    var user = document.createElement('div');
    user.className = "content-user"
    user.innerHTML = `<img class="icon-user" src="${userImage.src}"/><h4 id="name-user">${nomeUser}</h4><img class="arrow-user" src="${arrow.src}" />`;
    statusLogin.appendChild(user);
   
}



function loginValidation() {
    let logado = true
    if (logado === true) {
        createUser()
    } else {
        
    }
}