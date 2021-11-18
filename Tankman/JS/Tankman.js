let bg;

function preload() {
  bg = loadImage ("images/background/achtergrond.png");
  player = loadImage ("images/placeholder.gif");
}

function setup() {
  //canvas = createCanvas(1920,969);
  canvas = createCanvas(961,969);
  background('grey');
  canvas.parent('processing');
  noLoop();

  player = new speler;
}

function draw() {
  background(bg);
  player.teken();
}
