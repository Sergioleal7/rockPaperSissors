const rock = 1
const paper = 2
const sissors = 3
let user
const play = document.getElementById('play')
const piedraButton = document.getElementById('piedra')
const papelButton = document.getElementById('papel')
const tijeraButton = document.getElementById('tijera')
const resetButton = document.getElementById('reset')


piedraButton.addEventListener('click', userRock)
papelButton.addEventListener('click', userPapel)
tijeraButton.addEventListener('click', userTijera)
play.addEventListener('click', playGame)
resetButton.addEventListener('click', reset)

function userRock() {
    user = rock  
}
function userPapel() {
    user = paper
}
function userTijera() {
    user = sissors   
}
function reset() {
    window.location.reload(true)
}

function playGame() {
    let pc = Math.floor(Math.random()* (3 + 1 - 1) + 1)
    if(user == pc) {
        alert(`Empate: Escogiste ${user} y el pc ${pc}`)
    }
    else if ( user == rock && pc == sissors || user == sissors && pc == paper || user == paper && pc == rock) {
        alert(`¡Ganaste!: Escogiste ${user} y el pc ${pc}`)
    } else {
        alert(`Perdiste :( Escogiste ${user} y el pc ${pc}`)
    }
}

