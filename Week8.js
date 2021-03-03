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
    constructor(pos, size, color, speed, params){
        this.pos = createVector(pos.x, pos.y);
        this.pos2 = createVector(pos.x, pos.y); //if newPos isn't called, pos by default
        this.size = size;
        this.color = color;
        this.speed = speed;
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





//create curve
//create additional curves
//create animation of curves

class DotSystem{
    constructor(pos, size, color, speed, params){
        this.pos = createVector(pos.x, pos.y);
        this.size = size;
        this.color = color;
        this.speed = speed;
        this.params = params;
        this.dotSys = [];
    }


    //calculate the number of curves that have been input
    numberOfCurves(){
        return this.params.length/4;
     }

    
    //generate a single curve
    generateCurve(params = []){
        let dotSeq = [];
        let p = createVector(this.pos.x, this.pos.y);
        for (var i=0; i<12000; i++){
            dotSeq.push(new Dot(p, this.size, this.color, this.speed, params));
            dotSeq[i].newPos();
            p.set(dotSeq[i].pos2.x/100, dotSeq[i].pos2.y/100);
        }
        return dotSeq;
    }

    generateMultiArray(){
        let num = this.numberOfCurves();
        for(var i=0; i<num; i++){
            this.dotSys.push(this.generateCurve(this.params.splice(0,4)));
        }
    }

    drawCurve(num, myArray = this.dotSys[num]){
        //var myArray = this.dotSys[num];
        for(var i=0; i<myArray.length; i++){
            strokeWeight(myArray[i].size);
            strokeWeight(3);
            stroke(color(myArray[i].color));
            point(myArray[i].pos2.x, myArray[i].pos2.y);
        }
    }


    animate(lerpPos){
        let currentArray = [];
        let firstCurve = this.dotSys[0];
        let secondCurve = this.dotSys[1];
        let prams = [];

        //for each element in dot array calculate the difference between the two vectors at current pos
        //draw the new array
            background(255);
            prams.splice(0);
            currentArray.splice(0);
            for(var p = 0; p < firstCurve[0].params.length; p++){
                prams.push(lerp(firstCurve[0].params[p], secondCurve[0].params[p], lerpPos))
           }
            currentArray = this.generateCurve(prams);
            this.drawCurve(null, currentArray);
            lerpPos+=this.speed;
        return lerpPos;
    }
}







//variables to put into object later
let p; //position
let s; //size
let c; //color
let v; //speed
let prams = []; //parameters
let dots1; 
let d = [];
let lerpPos=0;

function setup(){
    createCanvas(600,600);
    background(255);


    p = createVector(1,1);
    s = 1;
    c = color('black');
    v = .01;
    

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
    frameRate(24);
     dots1 = new DotSystem(p, s, c, v, prams);
     dots1.generateMultiArray();

}

function draw(){
    //background(255);
    translate(width/2, height/2);

    print("animate now");
    if(lerpPos<1){
        lerpPos = dots1.animate(lerpPos);
    }
}