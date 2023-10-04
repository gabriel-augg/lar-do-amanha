


function userAnimals() {

    let animalList = [];
    let itemLocal = JSON.parse(localStorage.getItem('usuarios')) || []
    itemLocal.forEach(item => {
        if (item.logged) {
            animalList = item.animals
        }
    })

    return animalList
}



function homeCreateCard(animalNameParam, animalIMG, state, gender, postDate, classId, animalId, userId) {

    let div = document.getElementById('div-card-register')

    const card = document.createElement("div");


    card.classList.add("card-register");
    card.classList.add(classId)


   


    const imageDiv = document.createElement("div");
    const cardContent = document.createElement("div");
    const animalName = document.createElement("h3");
    const animalContent = document.createElement("div");
    const animalGender = document.createElement("h3");
    const location = document.createElement("h3");
    const date = document.createElement("div");
    const dateText = document.createElement("h4");
    const editAnimals = document.createElement('div')
    const editAnimal = document.createElement('div')
    const deleteAnimal = document.createElement('div')



    cardContent.classList.add('card-content-register');
    animalName.classList.add('animal-name-register');
    animalContent.classList.add('animal-content-register');
    animalGender.classList.add('animal-gender-register');
    location.classList.add('location-register');
    date.classList.add('date-register');
    imageDiv.classList.add('imgDiv')
    editAnimals.classList.add('edits-animals-register')
    editAnimal.classList.add('edit-animal-register')
    deleteAnimal.classList.add('delete-animal-register')

    function showAnimalInfo(data){
        
        let itemLocal = JSON.parse(localStorage.getItem('usuarios')) || []
        itemLocal.forEach(item => {
            item.animals.forEach(animal => {
                if(animal.animalId === data) {
                    
                    document.getElementById('animal-name').value = animal.animalName
                    document.getElementById('phone').value = animal.phone
                    document.getElementById('zipcode').value = animal.zipCode
                    document.getElementById('city').value = animal.city
                    document.getElementById('state').value = animal.state
                    let radioButtons = document.querySelectorAll('input[name="gender"]')
                    for (var i = 0; i < radioButtons.length; i++) {
                        if (radioButtons[i].value === animal.gender) {
                          radioButtons[i].checked = true;
                          break
                        }
                    }
                    document.getElementById('textarea').value = animal.description
                    let img = document.createElement('img')
                    let div = document.getElementById('upload-image')
                    div.innerHTML = ''
                    img.style.width = '100%'
                    img.style.height = '100%'
                    img.src = animal.animalIMG
                    div.style.display = 'block'
                    div.appendChild(img)
                }
            })
        })
    }



    editAnimal.onclick = () => {

        document.getElementById('animal-cards-register').style.display = 'none'
        document.getElementById('animalEdit-section').style.display = 'flex'
      
        showAnimalInfo(animalId)
        
    }

    deleteAnimal.onclick = () => {
        let itemLocal = JSON.parse(localStorage.getItem('usuarios')) || []
        itemLocal.forEach(item => {
            if (item.logged) {
                // let animalToDelete = item.animals.filter(item =>  item.animalId === animalId )
                // let index = item.animals.findIndex(item => item.animalId === animalToDelete.animalId)
                let animalToDelete = item.animals.find(animal => animal.animalId === animalId);
                let index = item.animals.indexOf(animalToDelete)
                item.animals.splice(index, 1)
                localStorage.setItem('usuarios', JSON.stringify(itemLocal))
                document.getElementById('div-card-register').innerHTML = ''
                homeMatchAnimalsAndCards()
                
            }
        })
    }

  

    animalName.textContent = animalNameParam;
    animalGender.innerHTML = `<img src=".././assets/mars-and-venus.svg" style="width: 26px; height: 26px;" alt="">${gender}`;
    location.innerHTML = `<img src=".././assets/location.svg" style="width: 26px; height: 26px;" alt="">${state}`;
    editAnimal.innerHTML = `<img src="/assets/edit.png" style="width: 42px; height: 42px; cursor:pointer;" alt="">`
    deleteAnimal.innerHTML =  `<img src="/assets/delete.png" style="width: 32px; height: 42px; cursor:pointer;" alt="">`
    dateText.textContent = `adicionado em ${postDate}`;
    imageDiv.style.backgroundImage = `url(${animalIMG})`


    cardContent.appendChild(animalName);
    animalContent.appendChild(animalGender);
    animalContent.appendChild(location);
    cardContent.appendChild(animalContent);
    editAnimals.appendChild(editAnimal)
    editAnimals.appendChild(deleteAnimal)
    date.appendChild(dateText);
    card.appendChild(imageDiv);
    card.appendChild(cardContent);
    card.appendChild(editAnimals)
    card.appendChild(date);
    div.appendChild(card);
}

function homeMatchAnimalsAndCards() {
    for (let i = 0; i < userAnimals().length; i++) {
        homeCreateCard(userAnimals()[i].animalName, userAnimals()[i].animalIMG, userAnimals()[i].state, userAnimals()[i].gender, userAnimals()[i].date, `animal${userAnimals()[i].animalId}`, userAnimals()[i].animalId, userAnimals()[i].userId)
    }
}





const logoutPage = () => {
    let itemLocal = JSON.parse(localStorage.getItem('usuarios')) || [];
    itemLocal.forEach(item => {
        if (item.logged) {
            item.logged = false;
            setLocalStorage(itemLocal);
            location.href = "../index.html";
        }
    });
}


const config = () => {
    document.getElementById('content-edit').style.display = "flex"
    document.getElementById('animalEdit-section').style.display = "none"
    document.getElementById('animal-cards-register').style.display = "none"
    document.getElementById('config').style.backgroundColor = "#122633"
    document.getElementById('animalsRegister').style.backgroundColor = ""
    document.getElementById('nothingSelected').style.display = "none"
}


const animalsRegister = () => {
    document.getElementById('animal-cards-register').style.display = "block"
    document.getElementById('animalEdit-section').style.display = "none"
    document.getElementById('content-edit').style.display = "none"
    document.getElementById('div-card-register').innerHTML = ""
    homeMatchAnimalsAndCards()
    document.getElementById('animalsRegister').style.backgroundColor = "#122633"
    document.getElementById('config').style.backgroundColor = ""
    document.getElementById('nothingSelected').style.display = "none"
}

