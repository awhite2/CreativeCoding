/*
Abra White
March 2021


Create a Particle System using custom Javascript Objects (ES6 class notation). 
Your Particle object must contain the following properties: position, size, color, speed.
*/

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//pos is the starting point of the drawing
//size is the number of points
//color is the starting color
//speed is the speed at whice the points appear (0-60)?
//params is an array of 4 numbers between -pi and pi

class Dot{
    constructor(pos, size, color, speed, params){
        this.pos = createVector(pos.x, pos.y);
        this.pos2 = createVector(pos.x, pos.y); //if newPos isn't called, pos by default
        this.size = size;
        this.color = color;
        this.speed = color;
        this.params = params;

        this.color.setAlpha(100);
    }//end constructor

    newPos(){   

        let x = ((sin(this.params[0]*this.pos.y)) - (cos(this.params[1]*this.pos.x)));
        let y = ((sin(this.params[2]*this.pos.x)) - (cos(this.params[3]*this.pos.y)));
        
        this.pos2.set(x, y);

        this.pos2.set(this.pos2.x*100, this.pos2.y*100);
    }//end newPos

}//end class definition

//variables to put into object later
let p; //position
let s; //size
let c; //color
let v; //speed
let prams = []; //parameters
let dots = []; //array of points


function setup(){
    createCanvas(600,600);
    background(255);


    p = createVector(1,1);
    s = 1;
    c = color('black');
    v = 24;

    //code if you want random parameters, but most don't look good
    // for (i=0; i<4; i++){
    //     prams.push(random(-2, 2));
    //     print(prams[i]);
    // }

    prams = [
        1.9656548229073136,
        1.5182617727132568,
        0.6008418697330651,
        1.8002179645256131,   

        0.8804864880020826,
        1.5483376402787492,
        1.5456179262064271,
        -1.9428844408004853,

        1.1656622811003698,
        1.2209656649851883,
        1.603113595680595,
        -1.3469920131041553
    ]

    for(i=0; i<125000; i++){
        dots.push(new Dot(p,s,c,v,prams));
        dots[i].newPos();
        p.set(dots[i].pos2.x/100, dots[i].pos2.y/100);
    }
}

function draw(){
    translate(width/2, height/2);
    for(i=0; i<dots.length; i++){
        dots[i].color;
        strokeWeight(dots[i].size);
        stroke(dots[i].color);
        point(dots[i].pos2.x, dots[i].pos2.y);
    }
    noLoop();
}
