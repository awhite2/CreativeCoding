class Fern{

constructor(x,y){

 this.x = x;
 this.y = y;
}


drawFern(){

    for (let i = 0; i < 10000; i++) {
        drawPoint();
        nextPoint();
      }
}



drawPoint(){
    stroke(255);
    strokeWeight(1);

    let px = map(this.x, -2.182, 2.6558, 0, width);
    let py = map(this.y, 0, 9.9983, height, 0);

    point(px,py);
}

nextPoint(){
    let nextX;
    let nextY;
    let r = random(1);

    if (r < 0.01) {

        nextX = 0;
        nextY = 0.16 * this.y;

    } else if (r < 0.86) {

        nextX = 0.85 * this.x + 0.04 * this.y;
        nextY = -0.04 * this.x + 0.85 * this.y + 1.6;

      } else if (r < 0.93) {

        nextX = 0.2 * this.x + -0.26 * this.y;
        nextY = 0.23 * this.x + 0.22 * this.y + 1.6;

      } else {

        nextX = -0.15 * this.x + 0.28 * this.y;
        nextY = 0.26 * this.x + 0.24 * this.y + 0.44;

      }

    this.x = nextX;
    this.y = nextY;

}
}