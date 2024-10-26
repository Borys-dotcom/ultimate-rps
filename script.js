/*=======================JAVA SCRIPT========================== */
// const roundsNumber = document.querySelector("#controlField");
const roundsNumber = document.getElementById('roundsInput');

const btnStart = document.querySelector("#controlButtonStart");

btnStart.addEventListener("click", () => {
    
    alert(roundsNumber.value);
    
});