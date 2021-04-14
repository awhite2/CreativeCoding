let x = 0.01;
let y = 0;
let z = 0;
const a = 10;
const b = 24;
const c = 20.0/8.0;

let points = [];

function setup(){
    createCanvas(800,600, WEBGL);
    colorMode(HSB);
}

function draw(){




    background(360);


    let camX = map(mouseX, 0, width, -200, 200);
    let camY = map(mouseY, 0, height, -200, 200);
    camera(camX, camY, height / 2.0 / tan((PI * 30.0) / 180.0), 0, 0, 0, 0, 1, 0);


    let dt = 0.01;

    let dx = (a * (y - x)) * dt;
    x = x + dx;

    let dy = (x * (b - z) - y) * dt;
    y = y + dy;

    let dz = (x * y - c * z) * dt;
    z = z + dz;

    points.push(createVector(x,y,z));
    noStroke();
    scale(7);
    let dir = 1;
    let col = 0;
    beginShape();
    for(let i of points){
        fill(color(360,50,50,col));
        vertex(i.x, i.y, i.z);
        endShape();
        beginShape();
        vertex(0,0,0);
        vertex(i.x, i.y, i.z);
        col+= .05*dir;
        if(col>1 || col<0){
            dir = -dir;
            //col = 0;
        }
    }endShape();
    
}