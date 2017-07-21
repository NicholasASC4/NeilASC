
var x = 300
var y = 300

var xspeed = 10
var yspeed = 10

var px1 = 20
var px2 = 555

var py1 = 230
var py2 = 230



function setup(){
    createCanvas(600,600);
    background('red');
}



function draw(){
    setup()
    textSize(16)
    text("PONG", 270, 50);
    var pong = ellipse(x,y,50,50);
    var player1 = rect(px1,py1,20,120)
    var player2 = rect(px2,py2,20,120)
    if (keyIsDown(UP_ARROW)){
        py1 = py1 - 10
    }
    if (keyIsDown(DOWN_ARROW)){
        py1 = py1 + 10
    }
    if (x >= 600-25){
        xspeed = -xspeed;
    } else if (x <= 0+25){
        xspeed = -xspeed;
    }
    x = x + xspeed
}