/*
    Abra White
    Homework 9 
    DOM

    
*/

var start = 0;
var start2 = 10000;
var speed = 0.01;

let colors = [];
let p;
let r;

let mountainHeight;
let timeOfDay;
let drivingSpeed;
let btn;

let isAnimated = 1;

function setup(){
    createCanvas(windowWidth, windowHeight);

    //setup color pallette
    colors = [
        color(115, 77, 91), //0: purple
        color(194, 82, 48), //1: terracotta
        color(134, 201, 165), //2: blue
        color(39, 25, 42), //3: dark purple
        color(140, 61, 43), //4: dark terracotta
        color(28, 42, 45), //5: dark blue
        color(249,237,50), //6: yellow
        color(195,178,175)  //7: grey  
    ]


    mountainHeight = createSlider(-height/2, height/2, 0, 10);
    mountainHeight.position(width/20, width/20);
    mountainHeight.style('width', width/10);
    
    timeOfDay = createSlider(0, 1, 0, .1);
    timeOfDay.position(width/20, width/20+20);
    timeOfDay.style('width', width/10);

    drivingSpeed = createSlider(0.001, 0.05, 0.01, 0.001);
    drivingSpeed.position(width/20, width/20+40);
    drivingSpeed.style('width', width/10);

    btn = createButton('PAUSE');
    btn.position(width/20, width/20+60);
    btn.style('width', width/10);


    //back range of mountains
    //divide speed for a parallax effect
    p = new Range(start, .001, speed/3, 0);

    //front range of mountains
    r = new Range(start2, 0.008, speed, height/2);

    btn.mousePressed(animate)


}


function draw(){
    background(setColor(colors[2],colors[5]));
    noStroke();

    fill(setColor(colors[6],colors[7]));
    ellipse(width*.75, height/10, width/10, width/10);
    
    fill(setColor(colors[1],colors[4]));
    p.drawRange();

    fill(setColor(colors[0],colors[3]));
    r.drawRange();

    let val = drivingSpeed.value();

    p.setSpeed(val/3);
    r.setSpeed(val);

    p.setHeight(mountainHeight.value());
    r.setHeight(mountainHeight.value());

    
}


class Range{
    /** 
     * 
     * @param {number} [start] startng x val on perlin noise curve
     * @param {number} [inc] how much to increment x val of curve, or mountain frequency & slope, best between .0001 and .01
     * @param {number} [speed] how quickly the range moves across the screen
     * @param {number} [h] y position of the tallest peak
     */
    constructor(start, inc, speed, h){
        this.start = start;
        this.inc = inc; 
        this.height = h; 
        this.originalHeight = h;
        this.speed = speed;
    }
    /** 
     * draws a mountain range based on Range properties
     * based on perlin noise numbers
     * increases start by speed
     */
    drawRange(){
        var xoff = this.start; 
        beginShape();
        vertex(0,height);
        for (var a = 0;a<width; a++){
            var b = map(noise(xoff), 0, 1, this.height, height);
            vertex(a, b);
    
            xoff += this.inc;
        }
        vertex(width, height);
        endShape();
        this.start += this.speed;
    } 
    /** 
     * setter for height (size)
     * @param {number} [h] first color
     */    
    setHeight(h){
        this.height = this.originalHeight-h;
    }
    /** 
     * setter for speed
     * @param {number} [s] new speed between 0 and 1
     */
    setSpeed(s){
        this.speed = s;
    }

}//end class

/** 
 * stops and starts the animation
 */
function animate(){
    isAnimated = isAnimated*-1;
    if(isAnimated==-1){
        noLoop();
    }else{
        loop();
    }
}

/** 
 * calculates a color based on the positon of the "time of day" slider
 * @param {p5.Color} [a] first color
 * @param {p5.Color} [b] second color
 * @return {p5.Color} the requested color
 */
function setColor(a, b){
    return lerpColor(a,b,timeOfDay.value());
}