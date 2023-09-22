




var menuItem = document.querySelectorAll('.nav-item')
function selectMenu() {
    menuItem.forEach((item) => 
        item.classList.remove('selected')
    )
    this.classList.add('selected')
}

menuItem.forEach((item) => 
    item.addEventListener('click', selectMenu)
)