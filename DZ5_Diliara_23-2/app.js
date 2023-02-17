function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var circles = document.getElementsByClassName("circle");


function findArrayElement(array, value){
    for (const arrayElement of array) {
        if(arrayElement === value)
            return true;
    }
    return false;
}

function click(){
    let usedNumbers = [];
    for (var i = 0; i<circles.length; i++) {
        let randomNumber;
        do {
            randomNumber = getRandomInt(1, 100);
        }while (findArrayElement(usedNumbers, randomNumber))
        circles[i].innerHTML = randomNumber;
        usedNumbers.push(randomNumber)
    }
}

const button = document.getElementById('generate')
console.log(button)
button.onclick = click;
