var senten = "Superheroes are cool."
function setup(){
    createCanvas(1000,1000);
    background('red');
    
}

function draw(){
    textSize(20);
    // var j = "Please Type the Sentence Below.";
    // fill(c);
    text("Please Type the Sentence Below.",50,50);
    text(senten,50,150);
    fill(255);
    text(myWords,50,175);
    if (myWords === senten){
        text("+10 points",50,200)
    }
}

var myWords = '';

function keyTyped(){
    myWords = myWords + key;
}
