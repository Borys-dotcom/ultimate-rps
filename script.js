/*=======================JAVA SCRIPT========================== */
//=======================Variables============================
let gameReady = 0;
let humanResult = 0;
let computerResult = 0;
let currentRound = 0;
let numberOfRounds = 0;

//====================DOM objects================================
const roundsNumber = document.getElementById('roundsInput');

const btnStart = document.querySelector("#controlButtonStart");
const btnReset = document.querySelector("#controlButtonReset");

const gameButtons = document.querySelectorAll(".gameButton");

const resultField = document.getElementById("result");

//====================Button operation==================
//====================START=============================
btnStart.addEventListener("click", () => {
    //game();
    if  ((roundsNumber.value > 0) &&
         (roundsNumber.value == Math.floor(roundsNumber.value))){
        roundsNumber.disabled = true;
        numberOfRounds = roundsNumber.value;
        gameReady = true;
        resultField.innerHTML = "";
    }
    else alert("Enter correct rounds number value!");

});

//====================RESET=============================
btnReset.addEventListener("click", () => {

    roundsNumber.disabled = false;
    roundsNumber.value = "";
    gameReady = false;
    humanResult = 0;
    computerResult = 0;
    currentRound = 0;
    resultField.innerHTML = "";

});

//====================ALL GAME BUTTONS=============================
gameButtons.forEach((gameButton) => {
    gameButton.addEventListener("click", () => {

        if (gameReady){
            game(round(gameButton.id, getComputerChoice()));
        }

    });
});

//====================Game functions===================
function round(human, computer){
    // resultField.innerHTML += `Human choice is: ${human}<br>`;
    // resultField.innerHTML += `Computer choice is: ${human}<br>`;


    if (((computer === "rock") && (human === "paper"))||
        ((computer === "paper") && (human === "scissors"))||
        ((computer === "scissors") && (human === "rock"))){
            return ["human", computer, human];
        }
    else if (((computer === "rock") && (human === "scissors"))||
            ((computer === "paper") && (human === "rock"))||
            ((computer === "scissors") && (human === "paper"))){
                return ["computer", computer, human];
            }
    else return ["draw", computer, human];
    
}

function getComputerChoice(){
    let possibleChoices = ["rock", "paper", "scissors"];
    let selection = Math.floor(Math.random()*3);
        return possibleChoices[selection];
}

function game(result){
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
    if (result[0] === "human") humanResult++;
    if (result[0] === "computer") computerResult++;
    currentRound++;
    
    if (currentRound == numberOfRounds){
        resultField.innerHTML += `<h2>Final round <br></h2>`;
        if ((result[0] === `human`) || (result[0] === `computer`)){
            resultField.innerHTML += `${result[0]} won this round!<br>`;
        }
        else resultField.innerHTML += 'Result of this round is Draw!<br>';
        resultField.innerHTML += `Human choose ${result[2]}, his result is: ${humanResult}<br>`;
        resultField.innerHTML += `Computer choose is ${result[1]}, it's result is: ${computerResult}<br>`;
        if (humanResult > computerResult){
            resultField.innerHTML += `<h1>Human won!<br></h1>`;
        }
        else if (humanResult < computerResult){
            resultField.innerHTML += `<h1>Computer won!<br></h1>`;
        }
        else resultField.innerHTML += `<h1>Draw!<br></h1>`;
        gameReady = false;
    }

    else{
        resultField.innerHTML += `<h2>Round:  ${currentRound}<br></h2>`;
        if ((result[0] === `human`) || (result[0] === `computer`)){
            resultField.innerHTML += `${result[0]} won this round!<br>`;
        }
        else resultField.innerHTML += 'Result of this round is Draw!<br>';
        resultField.innerHTML += `Human choose ${result[2]}, his result is: ${humanResult}<br>`;
        resultField.innerHTML += `Computer choose is ${result[1]}, it's result is: ${computerResult}<br>`;
    }
    resultField.scrollTop = resultField.scrollHeight;

}