
monthes = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

var check_date = function (month, day){
    return day <= monthes[month] && day >= 1 && month <= 12 && month >=1
}

var month =  Number ( prompt( "Введите месяц рождения"))
var date = Number ( prompt( "Введите день рождения"))

if ( month === 1 && date >=20 || month ===2 && date<=18 ){
    console.log("Ваш знак зодиака Водолей")
}
else if ( month === 2 && date >=19 || month ===3 && date<=20 ){
    console.log("Ваш знак зодиака - Рыбы")
}
else if ( month === 3 && date >=21 || month ===4 && date<=19 ){
    console.log("Ваш знак зодиака - Овен")
}
else if ( month === 4 && date >=20 || month ===5 && date<=20 ){
    console.log("Ваш знак зодиака - Телец")
}
else if ( month === 5 && date >=21 || month ===6 && date<=20 ){
    console.log("Ваш знак зодиака - Близнецы")
}
else if ( month === 6 && date >=21 || month ===7 && date<=22 ){
    console.log("Ваш знак зодиака - Рак")
}
else if ( month === 7 && date >=23 || month ===8 && date<=22 ){
    console.log("Ваш знак зодиака - Лев")
}
else if ( month === 8 && date >=23 || month ===9 && date<=22 ){
    console.log("Ваш знак зодиака - Дева")
}
else if ( month === 9 && date >=23 || month ===10 && date<=22 ){
    console.log("Ваш знак зодиака - Весы")
}
else if ( month === 10 && date >=23 || month ===11 && date<=21 ){
    console.log("Ваш знак зодиака - Скорпион (лучший знак)")
}
else if ( month === 11 && date >=22 || month ===12 && date<=21 ){
    console.log("Ваш знак зодиака - Стрелец")
}
else if ( month === 12 && date >=22 || month ===1 && date<=19 ){
    console.log("Ваш знак зодиака - Козерог")
}
else if (!check_date(month, date)) {
    alert("Введите корректную дату, используйте цифры")
    location.reload()
}



