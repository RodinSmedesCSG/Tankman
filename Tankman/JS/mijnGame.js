let bg;

function preload() {
  bg = loadImage ("images/background/achtergrond.png");
}

function setup() {
  //canvas = createCanvas(1920,969);
  canvas = createCanvas(961,969);
  background('grey');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  background(bg);
}
