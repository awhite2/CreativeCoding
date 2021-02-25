//Create a sketch that moves multiple shapes along Lissajous curves. 
//In addition to animating the shapes’ x and y positions, 
//use the sin() and cos() functions to animate their fill and/or stroke colors.

var waveLengthOne;
var waveLengthTwo;
var pointCount = 0;
var angle = 0.0;
var amplitude;

function setup(){
    createCanvas(400,400);
    waveLengthOne = random(50,150);
    waveLengthTwo = random(50,150);
    amplitude = width/2-10;
    background(60);
    }

function draw(){

    if(pointCount > 10000){
        noLoop();
    }

    noFill();
    strokeWeight(4);
    stroke(100);
    translate(width/2, height/2);

    beginShape();
    for(var i=0; i < pointCount; i++){
        angle = (i / waveLengthOne) * TWO_PI;
        var y = cos(angle)* amplitude;
        
       
        angle = (i / waveLengthTwo - 0.18) * TWO_PI;
        var x = sin(angle)* amplitude;

        stroke(lerpColor(color('magenta'),color('blue'),Math.abs(sin(angle))));
        strokeWeight(Math.abs((cos(angle))*7))
        point(x,y); 
    }
    endShape();
    pointCount++;
}