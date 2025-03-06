var x = 100;
var y = 100;

var xspeed = 6;
var yspeed = 12;


function setup() {
  createCanvas(480, 270);
}

function draw() {

  x = x + xspeed;
  y = y + yspeed;

  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }

  else if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }

  background(200);  
  ellipseMode(CENTER);
  rectMode(CENTER); 

  fill(0);
  circle(x, y, 10);

}