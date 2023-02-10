var someString = "123456789"
var myReverse = function (str){
    let res = ''
    for (let i=str.length-1; i>=0; i-- ){
        res = res + str[i]
    }
    return res
}

var reversedStr = myReverse(someString)
console.log(reversedStr)

var userNumber = Number (prompt("Введите любое целое положительное число"))
var sumOfNumbers = function (userNum){
    let sum = 0
    for (let i = userNum; i>=1; i--) {
        sum = sum + i
    }
    return sum
}
var someNumber = sumOfNumbers(userNumber)
alert (userNumber + " -> " +someNumber)

var i = 1
var sum = 0

while (i < 100){
    if(i%2){
        sum = sum + i
    }
    i++
}
console.log(sum)


var days = ["понедельник", "втОрник", "сРеда", "четВерг","пятница","суббота", "воскресенье"]
 for (let i =0; i< days.length; i++){
     if (days[i] === "суббота" || days[i] === "воскресенье" ) {
         days[i] =days[i].toUpperCase()
     }
     else {
         days[i] =days[i].toLowerCase()
     }
 }
console.log(days)