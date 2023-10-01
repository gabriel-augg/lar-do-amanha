const allState = {
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goiás',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraima',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins',
}

const allAnimals = {
    'cat': 'Gato',
    'dog': 'Cachorro',
    'rabbit': 'Coelho',
    'bird': 'Passarinho',
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

function usuarios() {
    return JSON.parse(localStorage.getItem('usuarios')) || []
}

function showAnimalInfo(){
    
    let localAnimal = JSON.parse(localStorage.getItem('animal'))
    animals().forEach(item => {
        if(item.animalId === localAnimal[0]) {

            for(let i = 0; i < usuarios().length; i++){
                if(usuarios()[i].id === localAnimal[1]){
                    document.getElementById('userName').innerHTML = usuarios()[i].nameUser
                    break
                }
                
            }

            document.getElementById('animalName').innerHTML = item.animalName
            document.getElementById('animalUf').innerHTML = allState[item.state]
            document.getElementById('date').innerHTML = `Adicionado em ${item.date}`
            document.getElementById('animalCity').innerHTML = item.city
            document.getElementById('animalGender').innerHTML = item.gender
            document.getElementById('animalType').innerHTML = allAnimals[item.animalType]
            document.getElementById('userPhone').innerHTML = item.phone
            document.getElementById('animalDescription').innerHTML = item.description
            console.log(item.animalId)
        }
    })
}

function redirectWpp(){
    let localAnimal = JSON.parse(localStorage.getItem('animal'))
    let wpp; 
    animals().forEach(item => {
        if(item.animalId === localAnimal) {
            wpp = `https://wa.me/${item.phone}`
        }
    })
    window.open (wpp, '_blank')
}



showAnimalInfo()