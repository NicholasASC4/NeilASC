function setup(){
    createCanvas(400,400);
    background('red')
}


function mouseDragged(){
    ellipse(mouseX, mouseY, 50, 50);
    return false
}

function draw(){
    ellipse(50,50,50,50);
}


