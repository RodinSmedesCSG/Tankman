var animatie = [];
var frame;

function preload() {
  bg = loadImage("images/background/achtergrond.png");
  attack = loadImage("images/tankPH2.png");

  // Wit van poppetje aanpassen, ongelukkige kleur
  for (var b = 0; b < 3; b++) {
    frame = loadImage("images/sprites/tankman" + b + ".png");
    animatie.push(frame);
  }

  meme = loadImage("images/meme.jpg");
  muziek1 = loadSound("sounds/redsun.mp3");
}

function setup() {
  canvas = createCanvas(961, 969);
  background('grey');
  canvas.parent('processing');
  player = new Speler(420, 830, animatie);
  tank = new Tank();
  tanks.push(new Tank());
}


function draw() {
  if (keyIsDown(ESCAPE)) {
    background(meme);
  }
  else {
    background(bg);
  }
  player.beweeg();
  tank.teken();
  player.teken();
  tank.val();
  player.keyReleased();

  /* MUZIEK FIXEN
  muziek1.loop = false;
  muziek1.play();
  */

}