
let min = 1,
    max = 10,
    winNumber = Math.round(Math.random() * (max - min) + min),
    trying = 3;
    console.log(winNumber);

const game = document.getElementById("game");
const guessInput = document.getElementById("guess-input");
const btn = document.getElementById("guess-btn");
const message = document.querySelector(".message");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");

minNum.textContent = min;
maxNum.textContent = max;

btn.addEventListener("click", () => {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`You need enter min=${min}, max=${max}`, "red");
    }


    if (winNumber == guess) {
        guessInput.disabled = true;
        guessInput.style.border = "1px solid green";
        setMessage(`You are win ${winNumber}`, "green");
        btn.textContent="New game";
        btn.style.backgroundColor="blue";
        btn.addEventListener('click', () => window.location.reload());
    } else if (guess !== winNumber) {
        setMessage(`You guess ${guess} is false `, "red");
        trying--;
        if(trying==0){
            guessInput.disabled = true;
            setMessage(`You fail, time is over! You guess ${guess} is false `, "red");
            btn.textContent="New game";
            btn.style.backgroundColor="blue";
            btn.addEventListener('click', () => window.location.reload());
        }
    } 
});


function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

