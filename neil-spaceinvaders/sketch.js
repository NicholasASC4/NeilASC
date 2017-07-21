function setup(){
    createCanvas(500,500)
    background(51)
}

var playerloc = 240
var y = 450
var spawn = y-21
var bullets = [];
var aliens = [
    [[25,25],[50,25],[100,25],[125,25],[150,25],[],[]],
    [[25,50],[50,50],[100,50],[125,50],[150,50],[],[]]
];

var ax = 25, ay = 25, vx = 2

var alienx = 25
var alieny = 25
var movex = 5
var movey = 5

function collisiondetection(ax,ay,ah,aw,bx,by,bh,bw){
return(ax<bx+bw&&ax+aw>bx&&ay<by+bh&&ah+ay>bx);
}

function draw(){
    setup();
    var player = rect(playerloc,y,20,40);
    if (keyIsDown(LEFT_ARROW)){
        playerloc-=10
    }
    if (keyIsDown(RIGHT_ARROW)){
        playerloc+=10
    }
    if (playerloc<11){
        playerloc = 10
    }
    if (playerloc>470){
        playerloc = 469
    }
    
    if(ax >= 320){
        vx=-1
        ay+=25;
    }
    if(ax <= 10){
        vx=1
        ay+=25;
    }

    for(var i=0;i<aliens.length;i++){
        for(var k=0;k<aliens[i].length;k++){
            if(k==0){
                aliens[i][k][0] = ax;
            }else{
                aliens[i][k][0] = aliens[i][k-1][0]+=25
            }
            aliens[i][k][1]=ay+(25*i)
            ellipse(aliens[i][k][0],aliens[i][k][1],25,25);
        }
    }

    for(var i=0;i<bullets.length;i++){
        bullets[i][1] -= 5;
        rect(bullets[i][0], bullets[i][1], 10, 10);
        for(var l=0;l<aliens.length;l++){
            for(var n=0;n<aliens[l].length;n++){
                if(aliens[l] && aliens[l][n] && bullets[i]){
                    if(collisiondetection(bullets[i][0], bullets[i][1], 10,10, aliens[l][n][0], aliens[l][n][1], 20,20)){
                        bullets.splice(i,1)
                        aliens[l].splice(n,1)
                    }
                }
            }
        }

        if(bullets[i][1] <= 0){
            console.log("Deleted bullet");
            bullets.splice(i,1);
        }
    }
    ax=ax+vx
}

function keyPressed(){
    if(keyCode == UP_ARROW || keyCode == 32){
        bullets.push([playerloc, spawn]);
        rect(playerloc,spawn,10,10)
    }
}

