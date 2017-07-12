function rand(num) {
    //console.log("Hello " + name)
    var randNum = Math.random()*num; //assign random # to randNum;
    var result = Math.floor(randNum); //set randNum to non decimal #;
    return result
}

//console.log(rand(10,"Neil"));

var myCoin = ["heads","tails"];

console.log(myCoin[rand(2)]);
