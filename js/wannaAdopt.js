function showAnimals() {
    getAnimals();
}

function createAnimalCard(animalNameParam, animalIMG, animalType, phone, zipCode, city, state, gender, postDate) {
    let div = document.getElementById('wannaAdopt-cards');
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

function getAnimals() {
    let animalList = []
    const itemLocal = JSON.parse(localStorage.getItem('usuarios')) || [];
    itemLocal.forEach(item => {
        for (let i = 0; i < item.animals.length; i++) {
            animalList.push(item.animals[i])
        }
    });
    for (let i = 0; i < animalList.length; i++) {
        createAnimalCard(animalList[i].animalName, null, animalList[i].animalType, null, null, null, animalList[i].state, animalList[i].gender, animalList[i].date)
    }
}

showAnimals();

const data = [];
const order = document.getElementById('order');
order.addEventListener('change', () => {
    
    const selectedValue = order.value;
    const itemLocal = JSON.parse(localStorage.getItem('usuarios'));
    const div = document.getElementById('wannaAdopt-cards');
    div.innerHTML = '';
    switch (selectedValue) {
        case 'all':
            getAnimals();
            break;
        case 'cat':
        case 'dog':
        case 'bird':
        case 'rabbit':
            itemLocal.forEach(item => {
                if (Array.isArray(item.animals)) {
                    const filteredAnimals = item.animals.filter(animal => animal.animalType === selectedValue);
                    if (filteredAnimals.length > 0) {
                        filteredAnimals.forEach(filteredAnimal => {
                            createAnimalCard(filteredAnimal.animalName, null, filteredAnimal.animalType, null, null, null, filteredAnimal.state, filteredAnimal.gender, filteredAnimal.date);
                        });
                    }
                }
            });
            break;
        default:
            console.log('Valor não encontrado.');
            break;
    }
});
