let colors = [];
let meet;

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
    meet = createVector(width*2/3, height*2/3);
    
}

function draw(){
 
    background(colors[2]);
    noStroke();
   
    //wall 1
    fill(colors[3]);
    rect(0, 0, meet.x, meet.y);

    //wall2
    fill(colors[1]);
    beginShape();
        vertex(meet.x, 0);
        vertex(width, 0);
        vertex(width, height);
        vertex(meet.x,meet.y)
        beginContour();
            winSlats(.75, .9, .1, colors[1], true);
        //shape and contour end in winSlats

    //floor
    fill(colors[0]);
    beginShape();
        vertex(0,meet.y);
        vertex(0,height);
        vertex(width, height);
        vertex(meet.x,meet.y);
    endShape();
    noLoop();
}

function winBorder(a, b, c){
    let myArray = [
        createVector(width*a, height*(c*1.2)),
        createVector(width*a, meet.y-(height*c)),
        createVector(width*b, meet.y),
        createVector(width*b, height*c)
    ]
    for(var i = 0; i<myArray.length; i++){
        vertex(myArray[i].x, myArray[i].y);
    }
    return myArray;
}

function winSlats(a, b, c, col, contour){
    let myArray = winBorder(a, b, c);
    if (contour){
        endContour();

    }
    endShape();

    strokeWeight(5);
    stroke(col);

    let points = [];
    //vertical lines
    for(let i = 1; i<=2; i++){
        points.push(p5.Vector.lerp(myArray[0], myArray[3], 1/3*i));
        points.push(p5.Vector.lerp(myArray[1], myArray[2], 1/3*i));
    }
    
    //horizontal lines
    for(let l = 1; l<=2; l++){
        points.push(p5.Vector.lerp(myArray[0], myArray[1], 1/3*l));
        points.push(p5.Vector.lerp(myArray[3], myArray[2], 1/3*l));
    }

    for(let k = 0; k<points.length; k=k+2){
        line(points[k].x, points[k].y, points[k+1].x, points[k+1].y)
    }
    strokeWeight(0);

}

function drawClock(){

}

function shadows(){
    
}