var inc = 0.01; //tie this to a slider?
var start = 0;

function setup(){
    createCanvas(400, 400);
}

function draw(){

    backgroun('grey');
    // x = map(noise(xoff1), 0, 1, 0, width);
    // y = map(noise(xoff2), 0, 1, 0, width);

    var xoff = start;
    beginShape();
    for (var x = 0; x<width; x++){
        stroke(255);
        var y = noise(0)*height;
        vertex(x, y);

        xoff += inc;
        start += inc;
    }
    endShape();
}