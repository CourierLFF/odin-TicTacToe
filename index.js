const boxes = document.querySelectorAll(".box");

boxes.forEach((button) => {
    button.addEventListener("click", (evt) => {
        evt.target.textContent = "X";
    });
});