function userAnimals() {
    
    let animalList = [];
    let itemLocal = JSON.parse(localStorage.getItem('usuarios')) || []
    itemLocal.forEach(item => {
       if(item.logged){
        animalList = item.animals
       }
    })
   
    return animalList
}



function homeCreatCard(animalNameParam, animalIMG, state, gender, postDate, classId, animalId, userId) {

    let div = document.getElementById('div-card-register')

    const card = document.createElement("div");


    card.classList.add("card-register");
    card.classList.add(classId)
    card.onclick = () => {
        localStorage.setItem('animal', JSON.stringify([animalId, userId]))
        window.location.href = '../pages/infoAnimal.html'
    }


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


    animalName.textContent = animalNameParam;
    animalGender.innerHTML = `<img src=".././assets/mars-and-venus.svg" style="width: 26px; height: 26px;" alt="">${gender}`;
    location.innerHTML = `<img src=".././assets/location.svg" style="width: 26px; height: 26px;" alt="">${state}`;
    editAnimal.innerHTML = `<img src="/assets/edit.png" style="width: 42px; height: 42px;" alt="">`
    deleteAnimal.innerHTML = `<img src="/assets/delete.png" style="width: 32px; height: 42px; " alt="">`
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
        homeCreatCard(userAnimals()[i].animalName, userAnimals()[i].animalIMG, userAnimals()[i].state, userAnimals()[i].gender, userAnimals()[i].date, `animal${userAnimals()[i].animalId}`, userAnimals()[i].animalId, userAnimals()[i].userId)
    }
}

homeMatchAnimalsAndCards()

