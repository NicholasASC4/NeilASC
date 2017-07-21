playerchoice = 'Rock'

var choices = ['Rock','Paper','Scissors']
var compChoice = choices[Math.floor(Math.random()*3)];

console.log("The player picked " + playerchoice)
console.log("")
console.log("The computer picked " + compChoice)
console.log("")

if (playerchoice == compChoice){
    console.log("It's a Tie!");
}

if (playerchoice == 'Rock' && compChoice == 'Paper'){
    console.log('Rock loses to paper! You Lose!')
}

if (playerchoice == 'Rock' && compChoice == 'Scissors'){
    console.log('Rock beats scissors! You win!')
}

if (playerchoice == 'Paper' && compChoice == 'Rock' ){
    console.log('Paper covers rock! You Win!')
}

if (playerchoice == 'Paper' && compChoice == 'Scissors'){
    console.log('Scissiors cut paper! You Lose!')
}

if (playerchoice == 'Scissors' && compChoice == 'Paper'){
    console.log("Scissiors cut paper! You Win!")
}

if (playerchoice == 'Scissors' && compChoice == 'Rock'){
    console.log("Rock smashes Scissors! You Lose!")
}else{
    console.log("What Happened?? Need another outcome!")
}