function showAnimals() {
    matchAnimalsAndCards()
}

function verificCards(data) {
    if (!data.length) {
        document.getElementById('notFound').style.display = 'flex';
        document.getElementById('wannaAdopt-cards').style.display = 'none';
    } else {
        document.getElementById('notFound').style.display = 'none';
        document.getElementById('wannaAdopt-cards').style.display = 'flex';
    }
}



function animals() {
    
    let animalList = [];
    let itemLocal = JSON.parse(localStorage.getItem('usuarios')) || []
    itemLocal.forEach(item => {
        for (let i = 0; i < item.animals.length; i++) {
            animalList.push(item.animals[i])
        }
    })
   
    return animalList
}



function createCard(animalNameParam, animalIMG, state, gender, postDate, classId, animalId, userId) {

    let div = document.getElementById('wannaAdopt-cards')

    const card = document.createElement("div");


    card.classList.add("card");
    card.classList.add(classId)
    card.onclick = () => {
        localStorage.setItem('animal', JSON.stringify([animalId, userId]))
        window.location.href = 'infoAnimal.html'
    }


    const imageDiv = document.createElement("div");
    const cardContent = document.createElement("div");
    const animalName = document.createElement("h3");
    const animalContent = document.createElement("div");
    const animalGender = document.createElement("h3");
    const location = document.createElement("h3");
    const date = document.createElement("div");
    const dateText = document.createElement("h4");


    cardContent.classList.add('card-content');
    animalName.classList.add('animal-name');
    animalContent.classList.add('animal-content');
    animalGender.classList.add('animal-gender');
    location.classList.add('location');
    date.classList.add('date');
    imageDiv.classList.add('imgDiv')


    animalName.textContent = animalNameParam;
    animalGender.innerHTML = `<img src=".././assets/mars-and-venus.svg" style="width: 26px; height: 26px;" alt="">${gender}`;
    location.innerHTML = `<img src=".././assets/location.svg" style="width: 26px; height: 26px;" alt="">${state}`;
    dateText.textContent = `adicionado em ${postDate}`;
    imageDiv.style.backgroundImage = `url(${animalIMG})`


    cardContent.appendChild(animalName);
    animalContent.appendChild(animalGender);
    animalContent.appendChild(location);
    cardContent.appendChild(animalContent);
    date.appendChild(dateText);
    card.appendChild(imageDiv);
    card.appendChild(cardContent);
    card.appendChild(date);
    div.appendChild(card);
}

function matchAnimalsAndCards() {
    for (let i = 0; i < animals().length; i++) {
    
        createCard(animals()[i].animalName, animals()[i].animalIMG, animals()[i].state, animals()[i].gender, animals()[i].date, `animal${animals()[i].animalId}`, animals()[i].animalId, animals()[i].userId)
    }
}



function showAnimalsOrdered() {

    for (let i = 0; i < animals().length; i++) {
        createCard(animals()[i].animalName, animals()[i].animalIMG, animals()[i].state, animals()[i].gender, animals()[i].date, `animal${animals()[i].animalId}`, animals()[i].animalId, animals()[i].userId)
    }
}



function order() {

    const selectElement = document.getElementById('order');
    document.getElementById('wannaAdopt-cards').innerHTML = ''

    switch (selectElement.value) {

        case 'cat':
            validation('cat', animals())
            break;
        case 'dog':
            validation('dog', animals())
            break;
        case 'bird':
            validation('bird', animals())
            break;
        case 'rabbit':
            validation('rabbit', animals())
            break;
        case 'remove':
            document.getElementById('wannaAdopt-cards').innerHTML = ''
            document.getElementById('order').value = 'order'
            showAnimals()
            break
        default:
            break;
    }
}


function validation(animal, animals) {
    animals.sort(function (a, b) {
 
        if (a.animalType === animal && b.animalType !== animal) {
            return -1;
        } else if (a.animalType !== animal && b.animalType === animal) {
            return 1;
        } else {
            return 0;
        }
    });
    for (let i = 0; i < animals.length; i++) {
        createCard(animals[i].animalName, animals[i].animalIMG, animals[i].state, animals[i].gender, animals[i].date, `animal${animals[i].animalId}`, animals[i].animalId, animals[i].userId)
    }
    verificCards(animals)
}

function search() {
    const input = document.getElementById("key-word");
    const keyword = input.value.toLowerCase();
    document.getElementById('wannaAdopt-cards').innerHTML = ''

    const filteredAnimals = animals().filter(animal => {
        const animalName = animal.animalName.toLowerCase(); 
        return animalName.includes(keyword);
    });

    

    for (let i = 0; i < filteredAnimals.length; i++) {
        createCard(filteredAnimals[i].animalName, filteredAnimals[i].animalIMG, filteredAnimals[i].state, filteredAnimals[i].gender, filteredAnimals[i].date, `animal${filteredAnimals[i].animalId}`, filteredAnimals[i].animalId, filteredAnimals[i].userId)
     }


    verificCards(filteredAnimals)
}

verificCards(animals())


showAnimals()

