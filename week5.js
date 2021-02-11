//Abra White
//Week 5 Homework


//Using your own custom function, draw a character (animal, person, etc.). 
//Your character function must use function arguments, allowing you to pass in:
//positionX, positionY, characterWidth, characterHeight, and characterColor properties.


//on click
//draw character at pos
//size change within a few options
//character color profile change within few options

function setup() {

	createCanvas(1200,400)
	background('black');
	alert("Click Mouse to Draw")
}

let oWidth = 169.139;
let oHeight = 229.476;
let p;

function draw() {	
	//nothing here because all drawing is in mouseClicked()
}

function mouseClicked(){
	//random percentage for size
	p = random(.3,1)
	character(mouseX,mouseY,p*oWidth,p*oHeight,random(0,360));
	return false;
}

function character(positionX, positionY, characterWidth, characterHeight, characterColor){
	//scale and translate are used to change size and position for modularity
	scale(p,p);
	//translate so that it corresponds better with the mouse click location
	positionX= (positionX/p)-(characterWidth)/2;
	positionY= (positionY/p)-(characterHeight)/2;

	//use the color to create a color pallette
	colorMode(HSB);
	//let h = hue(characterColor);
	let h = characterColor;
	let s = 75;
	let dark = color(h,s,10);
	let mediumDark = color(h,s,20);
	let medium = color(h,s,40);
	let mediumLight = color(h,s,60);
	let light = color(h,s,90);


	//draw character with features based off of original positions
	face(mediumLight, positionX+12.68, positionY+50.05);
	eye(mediumDark,positionX+93.64,positionY+105.08);
	bottomLip(mediumDark,positionX+41.62,positionY+176.32);
	topLip(dark,positionX+41.63,positionY+176.32);
	cheek(medium,light,positionX+124.34,positionY+197.68,positionX+160.34,positionY+145.01);
	nose(medium,light,positionX+80.23,positionY+147.55,positionX+62.82,positionY+140.59);
	eyebrows(mediumDark,positionX+86.63,positionY+86.5,positionX+11.18,positionY+88.82);

}

function face(h, x, y){
	let startX = x;
	let startY = y;
	fill(h);
	//draw outline of face
	strokeWeight(0);
	beginShape();
		vertex(startX,startY);
		bezierVertex(startX-22.25,startY+41.05, startX-9.62,startY+83.6, startX=startX-4,startY=startY+102.54);
		bezierVertex(startX+7.01,startY+23.63, startX+20.38,startY+68.67, startX=startX+51.94,startY=startY+75.91);
		bezierVertex(startX+38.86,startY+8.91, startX+80.12,startY-45.28, startX=startX+95.88,startY=startY-80.57);
		bezierVertex(startX+4.63,startY-10.37, startX+18.35,startY-42.27, startX=startX+9.99,startY=startY-80.57);
		bezierVertex(startX-2.4,startY-10.99, startX-6.06,startY-27.74, startX=startX-19.98,startY=startY-42.61);
		bezierVertex(startX-19.59,startY-20.94, startX-51.59,startY-29.72, startX=startX-79.9,startY=startY-21.97);
		bezierVertex(startX-33.23,startY+8.83, startX-48.62,startY+37.47, x,y);
	endShape();	
}

function bottomLip(h,x,y){
	let startX = x;
	let startY = y;
	fill(h);
	noStroke();
	beginShape();
		vertex(startX,startY);
		bezierVertex(startX,startY, startX+3.04,startY+16.26, startX=startX+22.8,startY=startY+16.81);
		bezierVertex(startX+19.75,startY+0.55, startX+28.28,-13.88+startY, startX=startX+28.28,startY=-13.88+startY);
	endShape();

}

function topLip(h,x,y){
	let startX = x;
	let startY = y;
	fill(h);
	noStroke();
	beginShape();
		vertex(startX,startY);
		bezierVertex(startX,startY, startX+6.7,startY-13.82, startX=startX+15.07,startY=startY-10.47);
		bezierVertex(startX+8.37,startY+3.35, startX+10.89,startY+7.54, startX=startX+10.89, startY=startY+7.54);
		bezierVertex(startX,startY, startX+8.79,startY-11.51, startX=startX+14.23,startY=startY-8.06);
		bezierVertex(startX+5.44,startY+3.45, startX+10.89, startY+13.92, startX+10.89, startY+13.92);
	endShape();

}

function eye(h,x,y){
	stroke(h);
	strokeWeight(1);
	noFill();
	let startX=x;
	let startY=y;

	beginShape();
		vertex(startX,startY);
		bezierVertex(startX,-.031+startY, 18.74+startX,14.25+startY, 37.48+startX,-.56+startY);
	endShape();

}

function cheek(c1,c2,x,y,x2,y2){
	let startX = x;
	let startY = y;
	fill(c1);
	noStroke();
	beginShape();
		vertex(startX,startY);
		bezierVertex(startX,startY, startX-24.82,startY-32.09, startX=startX-18.97,startY=startY-50.39);
		bezierVertex(startX,startY, startX+23.29,startY-25.47, startX=startX+35.18,startY=startY-33.02);
		bezierVertex(startX,startY, startX+28.6,startY-30.76, startX=startX+28.6, startY=startY-30.76);
		bezierVertex(startX,startY, startX+0.3,startY+34.78, startX=startX-8.3,startY=startY+54.2);
		bezierVertex(startX,startY, startX-21.31,startY+42.99, x,y)
	endShape();
	fill(c2);
	circle(x2,y2,3.5*2)
}

function nose(c1,c2,x,y,x2,y2){
	let startX = x;
	let startY = y;
	fill(c1);
	noStroke();
	beginShape();
		vertex(startX,startY);
		bezierVertex(startX-.55,startY+.79, startX-1.79,startY+.76, startX=startX-2.63,startY=startY+.26);
		bezierVertex(startX-.83,startY-.5, startX-1.41,startY-1.32, startX=startX-2.12,startY=startY-1.97);
		bezierVertex(startX-1.63,startY-1.5, startX-4.04,startY+.49, startX=startX-6.18,startY=startY-1.51);
		bezierVertex(startX-.7,startY+.19, startX-1.46,startY+.49, startX=startX-2.12,startY=startY+.19);
		bezierVertex(startX-1.33,startY-.61, startX-.71,startY-2.59, startX=startX-.03,startY=startY-3.89);
		bezierVertex(startX+4.44,startY-8.54, startX+2.19,startY-19.32, startX=startX+6.36,startY=startY-27.99);
		bezierVertex(startX+3.21,startY+6.1, startX+4.03,startY+13.15, startX=startX+4.45,startY=startY+20.03);
		bezierVertex(startX+.08,startY+1.28, startX+.15,startY+2.58, startX=startX+.6,startY=startY+3.77);
		bezierVertex(startX+.69,startY+1.81, startX+2.19,startY+3.18, startX=startX+3.16,startY=startY+4.86);
		bezierVertex(startX+.97,startY+1.68, startX+1.23,startY+4.12, startX=startX-.3,startY=startY+5.31);
	endShape();
	fill(c2);
	circle(x2,y2,4.42*2);
}

function eyebrows(h,x1,y1,x2,y2){
	fill(h);
	beginShape();
		vertex(x1,y1);
		vertex(x1+34.33,y1-7.69);
		vertex(x1+55.41,y1+4);
		vertex(x1+30.53,y1-2.43);
		vertex(x1,y1+6.08);
	endShape();
	beginShape();
		vertex(x2,y2);
		vertex(x2+14.1,y2-6.91);
		vertex(x2+46.16,y2-3.13);
		vertex(x2+46.16,y2+2.49);
		vertex(x2+15.2,y2-3.13);
	endShape();
}






