let playerOneTurn = true;

const playerOneGrid = [];
const playerTwoGrid = [];

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", (evt) => {
        if (evt.target.textContent == "") {
            if (playerOneTurn == true) {
                evt.target.textContent = "X";
                playerOneGrid.push(evt.target.dataset.position);
                playerOneTurn = false;
            } else {
                evt.target.textContent = "O";
                playerTwoGrid.push(evt.target.dataset.position);
                playerOneTurn = true;
            }
        }
    });
});