const reset = document.querySelector("#reset");
const first = document.querySelector("#firstIncrement");
const second = document.querySelector("#secondIncrement");
const firstDisplay = document.querySelector("#firstDisplay");
const secondDisplay = document.querySelector("#secondDisplay");
const play = document.querySelector("#play");

var firstScore = 0;
var secondScore = 0;
var gameOver = false;
let winningPoint = 3;

first.addEventListener("click", () => {
    if (!gameOver) {
        firstScore += 1;
        if (firstScore === winningPoint) {
            gameOver = true;
            firstDisplay.classList.add("winner");
            secondDisplay.classList.add("loser");
        }
        firstDisplay.textContent = firstScore;
    }
});

second.addEventListener("click", () => {
    if (!gameOver) {
        secondScore += 1;
        if (secondScore === winningPoint) {
            gameOver = true;
            secondDisplay.classList.add("winner");
            firstDisplay.classList.add("loser");
        }
        secondDisplay.textContent = secondScore;
    }
});

reset.addEventListener("click", toReset);

play.addEventListener("change", () => {
    winningPoint = parseInt(play.value);
    toReset();
});

function toReset() {
    gameOver = false;
    firstScore = 0;
    secondScore = 0;
    firstDisplay.textContent = 0;
    secondDisplay.textContent = 0;
    firstDisplay.classList.remove("winner", "loser");
    secondDisplay.classList.remove("winner", "loser");
}