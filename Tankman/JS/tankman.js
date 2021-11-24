function preload() {
  bg = loadImage ("images/background/achtergrond.png");
  attack = loadImage ("images/tankPH2.png");
  tankman = loadImage ("images/tankman128.png");
}

function setup() {
  canvas = createCanvas(961,969);
  background('grey');
  canvas.parent('processing');
  noLoop();

  player = new Speler(420,830);
  tank = new Tank();
}

function draw() {
  background(bg);
  player.beweeg();
  tank.teken();
  player.teken();
  tank.vallen();


  
}