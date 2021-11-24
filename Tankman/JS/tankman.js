function preload() {
  bg = loadImage ("images/background/achtergrond.png");
  tank = loadImage ("images/tanc.png");
  player = loadImage ("images/tankman.png");
}

function setup() {
  //canvas = createCanvas(1920,969);
  canvas = createCanvas(961,969);
  background('grey');
  canvas.parent('processing');
  noLoop();

  player = new Speler();
}

function draw() {
  background(bg);
  player.teken();
  player.beweeg();
}