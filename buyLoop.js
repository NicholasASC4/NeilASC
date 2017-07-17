

var prompt = require('prompt-sync')();
//
// get input from the user.
//
//var n = prompt('how many more times?');

var bank = 1000;
console.log("You Have $1000")
var inventory = ['Hyrule Sword','Potion','Shield','Bow']
var Bought = prompt("Which item would you like to buy? Hyrule Sword, Potion, Shield, or a Bow? ")


//inventory[0] = Number(650)
//inventory[1] = Number(300)
//inventory[2] = Number(400)
//inventory[3] = Number(500)

if (Bought == 'Hyrule Sword'){
    console.log(" ")
    console.log("you spent $650.")
    bank1 = bank - 650;
    console.log("You have $" + bank1 + " left.")
    console.log("You now own a Sword.")
    console.log("You have enough money to purchase a Potion.")
    console.log(" ")
    var buysword = prompt("Would you like one? ")
}

if (Bought == 'Potion'){
    console.log(" ")
    console.log("you spent $300.")2
    bank2 = bank - 300;
    console.log("You have $" + bank2 + " left.");
    console.log("You now own a Potion.")
    console.log("You have enough money to purchase a Hyrule Sword, Shield, or Bow.")
    console.log(" ")
    var buypotion = prompt("What would you like? ")
}

if (Bought == 'Shield'){
    console.log(" ")
    console.log("you spent $400.")
    bank3 = bank - 400;
    console.log("You have $" + bank3 + " left.");
    console.log("You now own a Shield")
    console.log("You have enough money to purchase a Potion or Bow.")
    console.log(" ")
    var buyshield = prompt("What would you like? ")
}
 
    if (Bought == 'Bow'){
    console.log(" ")
    console.log("you spent $500.")
    bank4 = bank - 500;
    console.log("You have $" + bank4 + " left.");
    console.log("You now own a Bow.")
    console.log("You have enough money to purchase a Potion or Shield.")
    console.log(" ")
    var buyBow = prompt("What would you like? ")
}

if (buysword == "Yes"){
    console.log(" ")
    console.log("You have $50 left.")
    console.log("You know own a Sword & Potion.")
    console.log("You don't have enough money to buy anything else. Happy Adventuring!")
}

if (buypotion == "Hyrule Sword"){
    console.log(" ")
    console.log("You spent $650.")
    console.log("You have $50 left.")
    console.log("You now own a Potion & Sword.")
    console.log("You don't have enough money to buy anything else. Happy Adventuring!")
}

if (buypotion == "Shield"){
    console.log("You spent $400.")
    console.log("You have $300 left.")
    console.log("You now own a Potion & Shield.")
    console.log("You don't have enough money to buy anything else. Happy Adventuring!")
}

if (buypotion == "Bow"){
    console.log("You spent $500.")
    console.log("You have $200 left.")
    console.log("You now own a Potion & Bow.")
    console.log("You don't have enough money to buy anything else. Happy Adventuring!") 
}

if (buyshield == "Potion"){
    console.log(" ")
    console.log("You spent $300.")
    console.log("You have $300 left.")
    console.log("You now own a Shield & Potion.")
    console.log("You don't have enough money to buy anything else. Happy Adventuring!")
}

if (buyshield == "Bow"){
    console.log(" ")
    console.log("You spent $500.")
    console.log("You have $100 left.")
    console.log("You now own a Shield & Bow.")
    console.log("You don't have enough money to buy anything else. Happy Adventuring!")
}

if (buyBow == "Shield"){
    console.log(" ")
    console.log("You spent $400.")
    console.log("You have $100 left.")
    console.log("You now own a Bow & Shield.")
    console.log("You don't have enough money to buy anything else. Happy Adventuring!")
}

if (buyBow == "Potion"){
    console.log(" ")
    console.log("You spent $300.")
    console.log("You have $200 left.")
    console.log("You now own a Bow & Potion.")
    console.log("You don't have enough money to buy anything else. Happy Adventuring!")
}

if (buysword == "No"){
    console.log(" ")
    console.log("Okay, you only own a Sword. Happy Adventuring!")
}

//var i = 0;
//while (i<15) {
//    i = i + 1;
//    console.log(i)
//}