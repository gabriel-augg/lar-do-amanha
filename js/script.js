
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
            location.href = 'loginPage.html'
            break;
        case 'btnDonate':
            location.href = "wannaDonation.html"
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

const btnDonation = document.getElementById('btn-donate')

btnDonation.addEventListener('click', () => {
    
    donationCreate()


})

function donationCreate (){
    const animalName = document.getElementById('animal-name')
    const animalIMG = document.getElementById('img-file')
    const animalType = document.getElementById('animal-type')
    const phone = document.getElementById('phone')
    const zipCode = document.getElementById('zipcode')
    const city = document.getElementById('city')
    const state = document.getElementById('state')
    const gender = document.getElementsByName('gender')
    

    class Animal {
        constructor(animalName, animalIMG, animalType, gender, phone, zipCode, city, state){
            this.animalName = animalName
            this.animalIMG = animalIMG
            this.animalType = animalType
            this.gender = gender
            this.phone = phone
            this.zipCode = zipCode
            this.city = city
            this.state = state
        }
    }

    let newAnimal = new Animal(animalName.value, animalIMG.value, animalType.value, gender.value, phone.value, zipCode.value, city.value, state.value)

    console.log(newAnimal)

}

let inputImage = document.getElementById('img-file');
let statusImage = false;

inputImage.addEventListener('change', (e) => {
    let divImage = document.getElementById('upload-image');

    if (statusImage === false) {
        let img = document.createElement('img');
        img.src = URL.createObjectURL(e.target.files[0]);
        img.style.width = '100%';
        img.style.height = '80%';
        divImage.appendChild(img);
        statusImage = true;
    } else {
        let img = document.createElement('img');
        img.src = URL.createObjectURL(e.target.files[0]);
        img.style.width = '100%';
        img.style.height = '80%';
        
        let existingImg = divImage.querySelector('img');
        divImage.replaceChild(img, existingImg);
    }
});
