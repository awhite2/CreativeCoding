/*
Week 6 Homework, Abra White

Using the transformation functions (translate(x,y), rotate(angle), and/or scale(x,y)) 
create a sketch with animated, spiralling shapes. Your sketch must incorporate a color 
palette of interpolated colors using lerpColor(). To successfully complete this assignment, 
you must use at least two of the three transformation functions.
*/


function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
}

function draw() {
    background(100);
    translate(width/2,height/2);
    stroke('Black');
    strokeWeight(2);
    point(0,0);
    strokeWeight(1);
    rotate(frameCount);
    translate(p5.Vector.fromAngle(deltaTime/1000, 10));
    noFill();
    drawCircles(5,20, 'Red', 'Cyan');
}

function drawCircles(radius, num, color1, color2){
    let c1 = color(color1);
    let c2 = color(color2);
    let round;
    for(i=0; i<=num; i++){
        swap = i%10==0;

        //print(swap);
        if(swap){
            [c1, c2] = [c2, c1];
            print("swapped: " + i + ", " + swap)
        }
        stroke(lerpColor(c1, c2, );
        circle(radius*i-i,radius+i,radius*2*i);
}

}