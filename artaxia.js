let gap = 10;
let diameter = 20;
let circleNum = 60;
let pointNum = 150;
let angle = 45;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}


function draw() {
  background(0);
  //img.resize(90, 0);
  //image(img, 5, height - (img.height + 5));
  
  // Mouse
  noCursor();
  noStroke();
  fill(255);
  circle(mouseX, mouseY, 5);
  
  // Shape
  push();
  
  translate(width/2, height/2 + 20);
  rotate(angle);
  angle = map(mouseX, 0, width, -0.1, 0.1) + angle;
  noFill();
  //stroke(255);
  strokeWeight(1);

  for (let i = 0; i < circleNum; i++) {
    var r = map(sin(frameCount / 2), -0.1, 0.1, 100, 200);
    var g = map(i, 0, 50, 100, 200);
    var b = map(cos(frameCount), -0.1, 0.1, 200, 100);
    
    /*var r = random(125);
    var g = random(255);
    var b = random(100);*/
    
    stroke(r, g, b);
    
    arc(0, 0, diameter + (gap * i), diameter + (gap * i), angle * i, 360 - angle / 2);
  }
  
  pop();
  
  // Random noise as background - lines
  push();
  
  stroke(125);
  strokeWeight(0.3);
  for (let i = 0; i < pointNum; i++) {
    var r = map(sin(frameCount / 2), -0.1, 0.1, 100, 200);
    var g = map(i, 0, 50, 100, 200);
    var b = map(cos(frameCount), -0.1, 0.1, 200, 100);
    stroke(r, g, b);
    //point(random(width), random(height));
    line(random(width), random(height), random(width), random(height));
  }
  
  pop();
  
  // Random noise - points
  
  push();
  
  stroke(125);
  strokeWeight(3);
  for (let i = 0; i < pointNum; i++) {
    var r = map(sin(frameCount / 2), -0.1, 0.1, 100, 200);
    var g = map(i, 0, 50, 100, 200);
    var b = map(cos(frameCount), -0.1, 0.1, 200, 100);
    stroke(r, g, b);
    point(random(width), random(height));
    //line(random(width), random(height), random(width), random(height));
  }
  
  pop();
  
  // Text
  push();
  
  translate(width/2, 90);
  noStroke();
  textFont('Courier New');
  textSize(80);
  textAlign(CENTER, CENTER);
  text('artaxia', 0, 0);
  textSize(18);
  text('Because not all Kangaroos are Astronauts...', 0, 60)
  
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
