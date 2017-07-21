var offset = 0

function setup(){
    createCanvas(501,501);
    background('rgba(0,255,0, 0.25)');
}

function draw(){
var myGrid = [[rect(0,0,100,100)],
    [rect(100,0,100,100)],
    [rect(200,0,100,100)],
    [rect(300,0,100,100)],
    [rect(400,0,99,100)],
    [rect(0,100,100,100)],
    [rect(100,100,100,100)],
    [rect(200,100,100,100)],
    [rect(300,100,100,100)],
    [rect(400,100,99,100)],
    [rect(0,200,100,100)],
    [rect(100,200,100,100)],
    [rect(200,200,100,100)],
    [rect(300,200,100,100)],
    [rect(400,200,99,100)],
    [rect(0,300,100,100)],
    [rect(100,300,100,100)],
    [rect(200,300,100,100)],
    [rect(300,300,100,100)],
    [rect(400,300,99,100)],
    [rect(0,400,100,99)],
    [rect(100,400,100,99)],
    [rect(200,400,100,99)],
    [rect(300,400,100,99)],
    [rect(400,400,99,99)]]

    myGrid[1] = true
    myGrid[0] = false

}

var c = color(255, 204, 0);

function mouseClicked(){
    for (i=0;i>myGrid.length;i++){
        if (myGrid[i] == true){
            fill(c)
            myGrid[i]
        }
    }    
}