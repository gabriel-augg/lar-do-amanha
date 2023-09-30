function showAnimals() {
    matchAnimalsAndCards()
}

function createAnimalCard(animalNameParam, animalIMG, animalType, phone, zipCode, city, state, gender, postDate) {
    let div = document.getElementById('wannaAdopt-cards');
    matchAnimalsAndCards()
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



function createCard(animalNameParam, animalIMG, animalType, phone, zipCode, city, state, gender, postDate) {

    let div = document.getElementById('wannaAdopt-cards')

    const card = document.createElement("div");


    card.classList.add("card");


    const imageDiv = document.createElement("div");
    const image = document.createElement("img");
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


    image.src = ".././assets/dog-bg.jpg";
    image.style.width = "100%";
    image.style.height = "20%";
    image.style.borderRadius = "16px";
    image.alt = "";


    animalName.textContent = animalNameParam;
    animalGender.innerHTML = `<img src=".././assets/mars-and-venus.svg" style="width: 26px; height: 26px;" alt="">${gender}`;
    location.innerHTML = `<img src=".././assets/location.svg" style="width: 26px; height: 26px;" alt="">${state}`;
    dateText.textContent = `adicionado em ${postDate}`;


    imageDiv.appendChild(image);
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
        createCard(animals()[i].animalName, null, null, null, null, null, animals()[i].state, animals()[i].gender, animals()[i].date)
    }
}



function showAnimalsOrdered() {

    for (let i = 0; i < animals().length; i++) {
        createCard(animals()[i].animalName, null, null, null, null, null, animals()[i].state, animals()[i].gender, animals()[i].date)
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

        default:
            break;
    }
}


function validation(animal, animals) {
    animals.sort(function (a, b) {
        // Compare os tipos de animal para ordenar "gato" antes de "cachorro"
        if (a.animalType === animal && b.animalType !== animal) {
            return -1; // "a" deve vir antes de "b"
        } else if (a.animalType !== animal && b.animalType === animal) {
            return 1; // "b" deve vir antes de "a"
        } else {
            return 0; // Mantenha a ordem original
        }
    });
    for (let i = 0; i < animals.length; i++) {
        createCard(animals[i].animalName, null, null, null, null, null, animals[i].state, animals[i].gender, animals[i].postDate)
    }
}

function search() {
    const input = document.getElementById("key-word");
    const keyword = input.value.toLowerCase(); // Converte a palavra-chave para minúsculas
    document.getElementById('wannaAdopt-cards').innerHTML = ''

    const filteredAnimals = animals().filter(animal => {
        const animalName = animal.animalName.toLowerCase(); // Converte o nome do animal para minúsculas
        return animalName.includes(keyword); // Verifica se o nome do animal contém a palavra-chave
    });

    for (let i = 0; i < filteredAnimals.length; i++) {
        createCard(filteredAnimals[i].animalName, null, null, null, null, null, filteredAnimals[i].state, filteredAnimals[i].gender, filteredAnimals[i].postDate)
    }

    console.log(filteredAnimals);
}





















showAnimals()

