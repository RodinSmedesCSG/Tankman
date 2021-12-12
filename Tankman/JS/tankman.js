var animatie = [];
var frame;

function preload() {
  bg = loadImage("images/background/achtergrond.png");
  start = loadImage("images/background/tiansquare.jpg");
  attack = loadImage("images/tankPH2.png");
  for (var b = 0; b < 3; b++) {
    frame = loadImage("images/sprites/tankman" + b + ".png");
    animatie.push(frame);
  }
  muziek1 = createAudio("sounds/redsun.mp3");
  //Bron muziek: https://www.youtube.com/watch?v=vnxzf16_54Q
}

function setup() {
  canvas = createCanvas(961, 969);
  background('grey');
  canvas.parent('processing');
  player = new Speler(420, 830, animatie);
  tank = new Tank();
  spel = new tankRegen();
  spel.nieuw();
  muziek1.loop();
}
/*
function draw() {
  spel.beginScherm();
  background(bg);
  player.beweeg();
  tank.teken();
  player.teken();
  tank.val();
  player.raak(tank);
  player.keyReleased();
  spel.teken();
  spel.update();
}
*/
function draw() {
  spel.update();
  spel.teken();
}

function mousePressed() {
  if (!spel.actief) {
    spel.actief = true;
    spel.appels = [];
  }
  else {
    if (spel.afgelopen) {
      spel.nieuw();
    }
  }
}