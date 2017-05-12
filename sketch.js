function setup() {
  createCanvas (2000,2000);
  frameRate (100)
}

function draw() {
  fill (random(1,255))
  if(mouseIsPressed===true){
    ellipse (mouseX,mouseY,random (1,50),random (1,50));
  }
}