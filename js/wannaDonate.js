const btnDonation = document.getElementById('btn-donate')
btnDonation.addEventListener('click', () => {
    donationCreate()


})

function donationCreate() {
    const animalName = document.getElementById('animal-name')
    const animalIMG = document.getElementById('img-file')
    const animalType = document.getElementById('animal-type')
    const phone = document.getElementById('phone')
    const zipCode = document.getElementById('zipcode')
    const city = document.getElementById('city')
    const state = document.getElementById('state')
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    const date = new Date()
    const currentDate = `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()}`



    class Animal {
        constructor(animalName, animalIMG, animalType, gender, phone, zipCode, city, state, date) {
            this.animalName = animalName
            this.animalIMG = animalIMG
            this.animalType = animalType
            this.gender = gender
            this.phone = phone
            this.zipCode = zipCode
            this.city = city
            this.state = state
            this.date = date
        }
    }

    let newAnimal = new Animal(animalName.value, animalIMG.value, animalType.value, selectedGender.value, phone.value, zipCode.value, city.value, state.value, currentDate)
    
    let itemLocal = JSON.parse(localStorage.getItem('usuarios')) || []

    itemLocal.forEach(item => {
        if (item.logged) {
            item.animals.push(newAnimal)
            console.log(item.animals)
            localStorage.setItem('usuarios', JSON.stringify(itemLocal));
        }
    });

}


// aparecer imagem no quero doar

let inputImage = document.getElementById('img-file');
let statusImage = false;

inputImage.addEventListener('change', (e) => {
    let divImage = document.getElementById('upload-image');

    if (statusImage === false) {
        let img = document.createElement('img');
        document.getElementById('upload-image').style.display = "block"
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



function fixedZipCode() {
    var fixed = cepInput.value.replace(/[.-]/g, '');
    return fixed
}


const cepInput = document.getElementById('zipcode');
const inputCity = document.getElementById('city');
const inputState = document.getElementById('state');

cepInput.addEventListener('blur', () => {
    fetch(`https://viacep.com.br/ws/${fixedZipCode()}/json/`)
        .then(res => res.json())
        .then((res) => {
            let city = res.localidade; 
            let state = res.uf;
            
            inputCity.value = city;
            inputState.value = state;
        })
});


