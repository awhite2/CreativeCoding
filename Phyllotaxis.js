let n = 0; //dot number
let c = 5; //scaling
function setup(){
    createCanvas(400,400);
    angleMode(DEGREES);
    background(0);
}

function draw(){
    var a = n * 137.5;
    var r = c * sqrt(n);

    //polar to cartesian
    var x = r * cos(a) + width/2;
    var y = r * sin(a) + height/2;
    
    fill(255);
    noStroke();
    ellipse(x,y,8,8);
    n++;
}