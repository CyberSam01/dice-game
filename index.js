let player1Score = 0
let player2Score = 0
let player1Turn = true
let winner = ""

const startScreen = document.getElementById("startScreen")
const playScreen = document.getElementById("playScreen")

let message = document.getElementById("message")
const startBtn = document.getElementById("startBtn")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const newPlayersBtn = document.getElementById("newPlayersBtn")

let playerInput1 = document.getElementById("player1Input")
let player1Name = document.getElementById("player1Name")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player1Dice = document.getElementById("player1Dice")

let playerInput2 = document.getElementById("player2Input")
let player2Name = document.getElementById("player2Name")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player2Dice = document.getElementById("player2Dice")

let player1Input = ""
let player2Input = ""

function setWinner(winner) {
    if ( player2Score >= 20) {
        message.textContent = `${winner} heeft gewonnen!`
        resetBtn.style.display = "inline-block"
        newPlayersBtn.style.display = "inline-block"
        rollBtn.style.display = "none"
    } else if (player1Score >= 20 ) {
        message.textContent = `${winner} heeft gewonnen!`
        resetBtn.style.display = "inline-block"
        newPlayersBtn.style.display = "inline-block"
        rollBtn.style.display = "none"
    }
}

function startGame() {
    const randNum = Math.ceil(Math.random() * 6);
    const currPlayer = document.querySelector(".active");
    if (currPlayer.id == player1Dice.id) {
        player1Dice.textContent = randNum
        player1Score += randNum
        player1Scoreboard.textContent = player1Score
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = `${player2Input} is aan de beurt`
        setWinner(player2Input)

    } else if (currPlayer.id == player2Dice.id){
        player2Dice.textContent = randNum
        player2Score += randNum
        player2Scoreboard.textContent = player2Score
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = `${player1Input} is aan de beurt`
        setWinner(player1Input)
    }
}

function resetGame() {
    resetBtn.style.display = "none"
    newPlayersBtn.style.display = "none"
    rollBtn.style.display = "inline-block" 
    player1Score = 0
    player2Score = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    message.textContent = `${player1Input} is aan de beurt`
    player1Dice.classList.add("active")
    player2Dice.classList.remove("active")
    startGame
}

function startFirstGame() {
    player1Score = 0
    player2Score = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    resetBtn.style.display = "none"
    newPlayersBtn.style.display = "none"
    rollBtn.style.display = "inline-block" 
    player1Input = playerInput1.value[0].toUpperCase() + playerInput1.value.substring(1)
    player2Input = playerInput2.value[0].toUpperCase() + playerInput2.value.substring(1)
    playScreen.style.display = "block" 
    message.textContent = `${player1Input} is aan de beurt`
    player1Name.textContent = player1Input
    player2Name.textContent = player2Input
    startScreen.style.display = "none"
    startGame
}

startBtn.addEventListener("click", startFirstGame)

rollBtn.addEventListener("click", startGame)

resetBtn.addEventListener("click", resetGame)

newPlayersBtn.addEventListener("click", function() {
    player1Name.textContent = ""
    player2Name.textContent = ""
    player1Input.value = ""
    player2Input.value = ""
    startScreen.style.display = "block"
    playScreen.style.display = "none" 
})