
function setup(){
    createCanvas(500,500)
}
 
var x = 26;
var y = 26;
var vx = 10;
var vy = 10;



function draw(){
    background('#222222') 
    ellipse(x,y,50,50)

    if (x >= 500-25){
        vx = -vx;
    } else if (x <= 0+25){
        vx = -vx;
    }
    x = x + vx;
    if (y >= 500-25){
        vy = -vy;
    } else if (y <= 0+25){
        vy = -vy;
    }
    y = y + vy;
}
