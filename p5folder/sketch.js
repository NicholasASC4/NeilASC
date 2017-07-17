function setup(){
    createCanvas(500,500);
    background('#fae');
    stroke('black');
    strokeWeight(10);
    fill('red')
    arc(width / 2, height / 2, 450, 450, PI, 0, CHORD);
    fill('white');
    arc(width/2, height/2, 450, 450, 0, PI, CHORD);
    ellipse(250,250,150,150)
    fill('black');
    ellipse(250,250,90,90)
}