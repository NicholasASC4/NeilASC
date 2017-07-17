function setup(){
    createCanvas(1000,1000);
    background('red')
}

function mouseDragged(){
    ellipse(mouseX, mouseY, 50, 50);
    return false
}
