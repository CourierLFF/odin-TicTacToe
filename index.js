let playerOneTurn = true;
let gameInProgress = true;
let playerOneScore = 0;
let playerTwoScore = 0;

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

boxes.forEach((box) => {
    box.addEventListener("click", (evt) => {
        if (gameInProgress == true) {
            if (evt.target.textContent == "") {
                if (playerOneTurn == true) {
                    evt.target.textContent = "X";
                    playerOneGrid.push(evt.target.dataset.position);
                    playerOneTurn = false;
                    checkWin();
                } else {
                    evt.target.textContent = "O";
                    playerTwoGrid.push(evt.target.dataset.position);
                    playerOneTurn = true;
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
    gameInProgress = true;
});

function checkWin() {
    for(i = 0; i < winConditions.length; i++) {
        if (winConditions[i].every(elem => playerOneGrid.includes(elem))) {
            playerOneScore += 1;
            playerOneScoreElem.textContent = `Player 1 Score: ${playerOneScore}`;
            gameInProgress = false;
        } else if (winConditions[i].every(elem => playerTwoGrid.includes(elem))) {
            playerTwoScore += 1;
            playerTwoScoreElem.textContent = `Player 2 Score: ${playerTwoScore}`;
            gameInProgress = false;
        } else if (playerOneGrid.length + playerTwoGrid.length == 9) {
            console.log("It's a draw!")
            gameInProgress = false;
            break;
        }
    }
}