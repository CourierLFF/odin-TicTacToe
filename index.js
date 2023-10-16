let playerOneTurn = true;

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

boxes.forEach((box) => {
    box.addEventListener("click", (evt) => {
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
    });
});

resetButton.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.textContent = "";
    })
    playerOneGrid.splice(0, playerOneGrid.length);
    playerTwoGrid.splice(0, playerTwoGrid.length);
});

function checkWin() {
    for(i = 0; i < winConditions.length; i++) {
        if (winConditions[i].every(elem => playerOneGrid.includes(elem))) {
            console.log("Player 1 Wins!");
        } else if (winConditions[i].every(elem => playerTwoGrid.includes(elem))) {
            console.log("Player 2 Wins!");
        }
    }
}