var counter = 0;
var decrease = function () {
    counter = counter - 1;
    writeResult(counter);
}
var increase = function () {
    counter = counter + 1;
    writeResult(counter);
}
var reset = function () {
    counter = 0;
    writeResult(counter);
}
const buttonDecrease = document.getElementById("DECREASE");
buttonDecrease.onclick = decrease;

const buttonIncrease = document.getElementById("INCREASE");
buttonIncrease.onclick = increase;

const buttonReset = document.getElementById("RESET");
buttonReset.onclick = reset;

const numberElement = document.getElementById("number")

var writeResult = function (number) {
    numberElement.innerText = number;
    if (number > 0){
        numberElement.style.color = "#045717"
    }else if ( number < 0){
        numberElement.style.color = "#da0606"
    }else {
        numberElement.style.color = "#505050"
    }
}




