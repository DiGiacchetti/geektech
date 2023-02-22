const maskCard = (cardNumber, hiddenNumbers) => {
    let resultString = ""

    for (let i = 0; i < cardNumber.length; i++) {
        if (i > 5 && i < 12) {
            resultString += hiddenNumbers
        } else {
            resultString += cardNumber[i]
        }
    }
    return resultString
}
console.log( maskCard("4815154823541789", "X"))


 const capitalizeName = (str) => {
    let resultCapitalise = ""

    for (let i =0; i< str.length; i++) {
        if (i === 0) {
            resultCapitalise += str[i].toUpperCase()
        } else {
            resultCapitalise += str[i].toLowerCase()
        }
    }
    return resultCapitalise
}
console.log ( capitalizeName("dilIaRa"))


// let userNameSurname = "Ilon Petrovich Mask"
const maskName = (str) => {
    let maskUser = ""
    for (let i = 0; i < str.length; i++){
        if (i === 0 || i === str.length-1) {
            maskUser += str[i]
        }else{
            if(str[i] === ' ')
                maskUser += str[i]
            else
            if (str[i+1] === ' ' || str[i-1] === ' '){
                maskUser += str[i]
            }else{
                maskUser += '_'
            }
        }
    }
    return maskUser
}

console.log(maskName("Ilon Petrovich Mask"))