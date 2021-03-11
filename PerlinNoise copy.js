class Range{
    constructor(start, inc, speed, h){
        this.start = start;
        this.inc = inc;
        this.height = h;
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
    

}

var start = 0;
var start2 = 10000;
var speed = 0.01;

let colors = [];
let p;
let r;

function setup(){
    createCanvas(windowWidth, windowHeight);

    colors = [
        color(166, 78, 94), //0: dark pink
        color(115, 77, 91), //1: purple
        color(242, 202, 153), //2: cream
        color(242, 171, 145), //3: light pnk
        color(166, 126, 123), //4: lght purple
        color(255,146,0), //5: orange
        color(72,89,38), //6: dark green
        color(92, 77, 61), //7: brown
        color(194, 82, 48), //8: terracotta
        color(134, 201, 165) //9: blue 
    ]
    tint(colors[0]);
    p = new Range(start, 0.01, speed/3, 0);
    r = new Range(start2, 0.008, speed, height/2);
}


function draw(){
    background(colors[9]);

    noStroke();
    
    fill(colors[8]);
    p.drawRange();
    //start += p.speed;


    fill(colors[1]);
    r.drawRange();

}

