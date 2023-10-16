const boxes = document.querySelectorAll(".box");

let playerOneTurn = true;

boxes.forEach((button) => {
    button.addEventListener("click", (evt) => {
        if (playerOneTurn == true) {
            evt.target.textContent = "X";
            playerOneTurn = false;
        } else {
            evt.target.textContent = "O";
            playerOneTurn = true;
        }
    });
});