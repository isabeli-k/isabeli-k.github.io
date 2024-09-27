var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  //canvas.style('z-index', '-1');
  background(255);
}

function draw() {  
  if (mouseIsPressed === true) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }

  // Text
  push();
  
  translate(width/2, 90);
  noStroke();
  textFont('Courier New');
  textSize(80);
  textAlign(CENTER, CENTER);
  text('artaxia', 0, 0);
  textSize(18);
  text("To restart your drawing, press r...", 0, 60);
  text('If you love your creation, press s and save it!', 0, 90);
  
  pop();
}

function windowResized() {
  resizeCanvas();
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveDrawing();
  }
  
  if (key === 'r' || key === 'R') {
    clear();
  }
}

function saveDrawing() {
  save("picture.png");
}
