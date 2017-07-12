function randLetter() {
    var Alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var RandomABC = Alphabet[Math.floor(Math.random()*26)];
    return RandomABC
}
console.log(randLetter())

function rand(num) {
    var random = Math.random()*num;
    var result = Math.floor(random);
    return result
}

var Letters = ["qwertyuiopasdfghjklzxcvbnm"]
var Length = rand(16)
var string = '';
var string2= '';
var Length2 = rand(10)

for (var i=0; i<Length; i++){
    string = string.concat(randLetter())
}
console.log(string)

function randomword() {
    var Word = ["sugar","spice","everything","nice","all","star","code"]
    var RandomWords = Word[Math.floor(Math.random()*7)];
    return RandomWords
}
console.log(randomword())

for (var i=0; i<Length2; i++){
    string2 = string2.concat(randomword() + ' ');
}

console.log(string2 + ".");