
const clickLogo = document.getElementById('image-logo')
clickLogo.addEventListener('click', () => {
    location.href = "index.html"
})




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
            location.href = "index.html"
            break;
        case 'adopt':
            document.getElementById('navItem').style.display = "none"
            document.getElementById('navItemResponse').style.display = "none"
            loginValidation()
            break;
        case 'contactus':

            break;
        case 'login':

            break;
        case 'btnDonate':
            location.href = "wannaAdopt.html"
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
    if(userCreated === true){
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




function loginValidation() {
    let logado = true
    if (logado === true) {
        createUser()
        return
    } else {
        
    }
}