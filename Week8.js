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
//size is stro
//color is the starting color
//speed is the speed at whice the points appear (0-60)?
//params is an array of 4 numbers between -2 and 2

class Dot{
    constructor(pos, color, params){
        this.pos = createVector(pos.x, pos.y);
        this.pos2 = createVector(pos.x, pos.y); //if newPos isn't called, pos by default
        this.color = color;
        this.params = params;

        this.color.setAlpha(50);
    }//end constructor

    newPos(){   

        let x = ((sin(this.params[0]*this.pos.y)) - (cos(this.params[1]*this.pos.x)));
        let y = ((sin(this.params[2]*this.pos.x)) - (cos(this.params[3]*this.pos.y)));
        
        this.pos2.set(x, y);

        this.pos2.set(this.pos2.x*100, this.pos2.y*100);
    }//end newPos

}//end class definition



//handles a system of dots inluding single and multiple curves
class DotSystem{
    constructor(pos, size, color, speed, params){
        this.pos = createVector(pos.x, pos.y);
        this.size = size;
        this.color = color;
        this.speed = speed;
        this.params = params;
        this.dotSys = [];
        this.num;
    }


    //calculate the number of curves that have been input
    numberOfCurves(){
        return this.num = this.params.length/4;
     }

    
    //generate a single curve
    generateCurve(c, params = []){
        let dotSeq = [];
        let p = createVector(this.pos.x, this.pos.y);
        for (var i=0; i<this.size; i++){
            dotSeq.push(new Dot(p, c, params));
            dotSeq[i].newPos();
            p.set(dotSeq[i].pos2.x/100, dotSeq[i].pos2.y/100);
        }
        return dotSeq;
    }

    //generate a multidimensional array of Dots based on the paramets inputs
    //should change to a second variable to splice probably
    generateMultiArray(){
        let num = this.numberOfCurves();

        let c = this.triadicColor(this.color);
        for(var i=0; i<num; i++){
            this.dotSys.push(this.generateCurve(c[i%3], this.params.splice(0,4)));
        }
    }

    //draw a curve based on an array of Dots
    drawCurve(num, myArray = this.dotSys[num]){
        for(var i=0; i<myArray.length; i++){
            strokeWeight(1);
            stroke(color(myArray[i].color));
            point(myArray[i].pos2.x, myArray[i].pos2.y);
        }
    }

    //create a new curve based on two other curves 
    animate(lerpPos, n){
        let currentArray = [];
        let firstCurve = this.dotSys[n];
        let secondCurve = this.dotSys[n+1];
        let prams = [];

        let c;

        for(var p = 0; p < firstCurve[0].params.length; p++){
            prams.push(lerp(firstCurve[0].params[p], secondCurve[0].params[p], lerpPos))
            c = lerpColor(firstCurve[0].color, secondCurve[0].color, lerpPos);
        }
        currentArray = this.generateCurve(c, prams);
        this.drawCurve(null, currentArray);
        lerpPos+=this.speed;
        return lerpPos;
    }

    triadicColor(col = this.color){
        colorMode(HSB);
        let c = hue(col);
        let s = saturation(col);
        let b = brightness(col);
        let c2 = (c - 120) < 0 ? c + 240 : c - 120;
        let c3 = (c + 120) > 360 ? 480 - c : c + 120;

        return [color(c,s,b), color(c2,s,b), color(c3,s,b)];
    }
}// end class def







//variables to put into object later
let p; //position
let s; //size
let c; //color
let v; //speed
let prams = []; //parameters
let dots1; 
let lerpPos=0;
let n = 0;

function setup(){
    createCanvas(600,600);
    background(255);
    colorMode(HSB);


    p = createVector(1,1); //starting position
    s = 50000; //size or number of particles in the system
    c = color('purple');
    v = .01; //relates to the difference between start and end points
    

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
    frameRate(40);
     dots1 = new DotSystem(p, s, c, v, prams);
     dots1.generateMultiArray();

}

function draw(){
    translate(width/2, height/2);

    if(lerpPos<1){
        background(0);
        lerpPos = dots1.animate(lerpPos, n);
    }else{
        if(n < dots1.num-2){
            lerpPos = 0;
            n++;
            lerpPos = dots1.animate(lerpPos, n);
        }else{
        noLoop();
        }
    }
}