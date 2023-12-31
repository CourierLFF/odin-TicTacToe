let playerOneTurn = true;
let gameInProgress = false;
let playerOneScore = 0;
let playerTwoScore = 0;
let playerSign = "";
let computerSign = "";

const playerOneGrid = [];
const playerTwoGrid = [];
const winConditions = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"]
];

const boxes = document.querySelectorAll(".box");
const resetButton = document.querySelector("#reset-button");
const playerOneScoreElem = document.querySelector("#player-one-score");
const playerTwoScoreElem = document.querySelector("#player-two-score");
const turnInfo = document.querySelector("#turn-info")
const xButton = document.querySelector("#x-button");
const oButton = document.querySelector("#o-button");
const startButton = document.querySelector("#start-button");
const gameSetupDisplay = document.querySelector(".game-setup");

xButton.addEventListener("click", (evt) => {
    evt.target.style.backgroundColor = "#03adfc";
    oButton.style.backgroundColor = "white";
    playerSign = "X";
    computerSign = "O";
});

oButton.addEventListener("click", (evt) => {
    evt.target.style.backgroundColor = "#fc0339";
    xButton.style.backgroundColor = "white";
    playerSign = "O";
    computerSign = "X";
});

startButton.addEventListener("click", (evt) => {
    if (playerSign != "" && computerSign != "") {
        gameSetupDisplay.style.display = "none";
        gameInProgress = true;
        resetButton.disabled = false;
    }
});

boxes.forEach((box) => {
    box.addEventListener("click", (evt) => {
        if (gameInProgress == true) {
            if (evt.target.textContent == "") {
                if (playerOneTurn == true) {
                    evt.target.textContent = playerSign;
                    playerOneGrid.push(evt.target.dataset.position);
                    playerOneTurn = false;
                    turnInfo.textContent = "Player Two Turn!";
                    checkWin();
                } else {
                    evt.target.textContent = computerSign;
                    playerTwoGrid.push(evt.target.dataset.position);
                    playerOneTurn = true;
                    turnInfo.textContent = "Player One Turn!";
                    checkWin();
                }
            }
        }
    });
});

resetButton.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.textContent = "";
    })
    playerOneGrid.splice(0, playerOneGrid.length);
    playerTwoGrid.splice(0, playerTwoGrid.length);
    turnInfo.textContent = "Player One Turn!";
    playerOneTurn = true;
    gameInProgress = true;
});

function checkWin() {
    for(i = 0; i < winConditions.length; i++) {
        if (winConditions[i].every(elem => playerOneGrid.includes(elem))) {
            playerOneScore += 1;
            playerOneScoreElem.textContent = `Player One Score: ${playerOneScore}`;
            turnInfo.textContent = "Player One Wins!";
            gameInProgress = false;
        } else if (winConditions[i].every(elem => playerTwoGrid.includes(elem))) {
            playerTwoScore += 1;
            playerTwoScoreElem.textContent = `Player Two Score: ${playerTwoScore}`;
            turnInfo.textContent = "Player Two Wins!";
            gameInProgress = false;
        } else if (playerOneGrid.length + playerTwoGrid.length == 9) {
            turnInfo.textContent = "It's a Draw!";
            gameInProgress = false;
            break;
        }
    }
}