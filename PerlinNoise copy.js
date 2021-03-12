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
    createElement('h3', "Height");
    
    timeOfDay = createSlider(0, 1, 0, .1);
    timeOfDay.position(width/20, width/20+20);
    timeOfDay.style('width', width/10);
    createElement('h3', "Time");

    drivingSpeed = createSlider(0.001, 0.05, 0.01, 0.001);
    drivingSpeed.position(width/20, width/20+40);
    drivingSpeed.style('width', width/10);

    btn = createButton('PAUSE');
    btn.position(width/20, width/20+60);
    btn.style('width', width/10);


    //back range of mountains
    //divide speed for a parallax effect
    p = new Range(start, 0.01, speed/3, 0);

    //front range of mountains
    r = new Range(start2, 0.008, speed, height/2);

    btn.mousePressed(animate)


}


function draw(){
    background(lerpColor(colors[2],colors[5],timeOfDay.value()));
    noStroke();

    fill(lerpColor(colors[6],colors[7],timeOfDay.value()*2));
    ellipse(width*.75, height/10, width/10, width/10);
    
    fill(lerpColor(colors[1],colors[4],timeOfDay.value()));
    p.drawRange();

    fill(lerpColor(colors[0],colors[3],timeOfDay.value()));
    r.drawRange();

    let val = drivingSpeed.value();

    p.setSpeed(val/3);
    r.setSpeed(val);

    p.setHeight(mountainHeight.value());
    r.setHeight(mountainHeight.value());

    
}

class Range{
    constructor(start, inc, speed, h){
        this.start = start;
        this.inc = inc;
        this.height = h;
        this.originalHeight = h;
        this.speed = speed;
    }

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
    
    setHeight(h){
        this.height = this.originalHeight-h;
    }

    setSpeed(s){
        this.speed = s;
    }

}

function animate(){
    isAnimated = isAnimated*-1;
    if(isAnimated==-1){
        noLoop();
    }else{
        loop();
    }
}