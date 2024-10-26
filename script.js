/*=======================JAVA SCRIPT========================== */
const roundsNumber = document.getElementById('roundsInput');

const btnStart = document.querySelector("#controlButtonStart");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnStart.addEventListener("click", () => {
    
    game();

});


function game(){
    console.log(getComputerChoice());
    console.log(getHumanChoice());
}

function getComputerChoice(){
    let selection = Math.floor(Math.random()*3);
    return selection;
}

function getHumanChoice(){

}