let player1Score = 0
let player2Score = 0
let player1Turn = true
let winner = ""

let message = document.getElementById("message")
let rollBtn = document.getElementById("rollBtn")
let resetBtn = document.getElementById("resetBtn")

let player1Scoreboard = document.getElementById("player1Scoreboard")
let player1Dice = document.getElementById("player1Dice")

let player2Scoreboard = document.getElementById("player2Scoreboard")
let player2Dice = document.getElementById("player2Dice")

function setWinner(winner) {
    if (player1Score >= 20 || player2Score >= 20) {
        message.textContent = `${winner} is the winner!`
        resetBtn.style.display = "inline-block"
        rollBtn.style.display = "none"
    }
}

function startGame() {
    const randNum = Math.ceil(Math.random() * 6);
    const currPlayer = document.querySelector(".active");
    console.log(document.getElementById("player1").children.player1Dice);
    if (currPlayer.id == player1Dice.id) {
        player1Dice.textContent = randNum
        player1Score += randNum
        player1Scoreboard.textContent = player1Score
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        winner = "Player 1"
        setWinner(winner)

    } else if (currPlayer.id == player2Dice.id){
        player2Dice.textContent = randNum
        player2Score += randNum
        player2Scoreboard.textContent = player2Score
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        winner = "Player 2"
        setWinner(winner)
    }
}

rollBtn.addEventListener("click", startGame)

resetBtn.addEventListener("click", function() {
    resetBtn.style.display = "none"
    rollBtn.style.display = "inline-block"
    player1Score = 0
    player2Score = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    message.textContent = "Player 1 Turn"
    player1Dice.classList.add("active")
    player2Dice.classList.remove("active")
    startGame
})