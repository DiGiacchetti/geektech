var starbucks = {
    coffee: {
        espresso: {
            cost: 220,
            description: "Very strong coffee.",
            volume: 0.2,
            available: false
        },
        cappuccino: {
            cost: 230,
            description: "Coffee with milk and fluffy creamy foam.",
            volume: 0.3,
            available: true
        },
        latte: {
            cost: 250,
            description: "Coffee with milk and creamy foam, balanced and mild taste.",
            volume: 0.3,
            available: false
        },
        mochaccino: {
            cost: 250,
            description: "Coffee with chocolate chips",
            volume: 0.2,
            available: true
        }
    },
    tea: {
        green: {
            cost: 120,
            description: "This gives green tea its light, delicate flavour and pale green/yellow colour.",
            volume: 0.3,
            available: true
        },
        black: {
            cost: 120,
            description: "Indian loose leaf tea.",
            volume: 0.3,
            available: true
        },
        fruit: {
            cost: 150,
            description: "Natural and vegan tea.",
            volume: 0.3,
            available: true
        },
        piala: {
            cost: 110,
            description: "Granulated tea.",
            volume: 0.3,
            available: false
        }

    }
}
var check = function (available) {
    if (available) {
        alert ("Your order has been received, please wait")
    }
    else {
        alert ("This drink is out of stock, please select another.")}
}

var choice = prompt("Hello! What would you like to drink? coffee/tea")
switch (choice) {
    case "coffee":
        var coffeeChoice = prompt("What kind of coffee do you want? " + Object.keys(starbucks[choice]).join('/'))
        switch (coffeeChoice) {
            case "espresso":
                check(starbucks[choice][coffeeChoice].available)
                break
            case "cappuccino":
                check(starbucks[choice][coffeeChoice].available)
                break
            case "mochaccino":
                check(starbucks[choice][coffeeChoice].available)
                break
            case "latte":
                check(starbucks[choice][coffeeChoice].available)
                break
            default:
                    alert('Wrong choice! Bye!!1')
        }
        break
    case "tea" :
        var teaChoice = prompt("What kind of tea do you want? " + Object.keys(starbucks[choice]).join('/'))
        switch (teaChoice) {
            case "black":
                check(starbucks[choice][teaChoice].available)
                break
            case "green":
                check(starbucks[choice][teaChoice].available)
                break
            case "fruit":
                check(starbucks[choice][teaChoice].available)
                break
            case "piala":
                check(starbucks[choice][teaChoice].available)
                break
            default:
                alert('Wrong choice! Bye!!1')
        }
}
