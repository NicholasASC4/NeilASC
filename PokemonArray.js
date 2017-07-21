var myPokemonRoster = ["Mewtwo","Snorlax","Blaziken","Heracross","Rayquaza"]

var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];

//console.log(firstToFight)
//console.log(secondToFight)

for (var i=0; i<5; i++){
    console.log("my Pokemon Roster is..." + myPokemonRoster[i])
}

console.log("");

var myPokemonPower = ["Psystrike","Heavy Slam","Flare Blitz","Close Combat","Hyper Beam"]

for (var i=0; i<5; i++){
    console.log(
        myPokemonRoster[i] + " can do the move..." + myPokemonPower[i])

}

console.log("");

var myPokemonSpecies = ["Phychic","Normal","Fire & Fighting","Bug & Fighting","Dragon & Fighting"]

for (var i=0; i<5; i++){
    console.log(
        myPokemonRoster[i] + "'s pokemon type is..." + myPokemonSpecies[i])
}