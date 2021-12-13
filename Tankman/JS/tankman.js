/***********************************************************************************************************************
***Er is een bug met P5 waardoor de muziek niet altijd afspeelt, herladen met CTRL + F5 en tijdens het loaden klikken***
***********************************************************************************************************************/

var animatie = [];
var frame;

function preload() {
  bg = loadImage("images/background/achtergrond.png");
  // Door ons gemaakt
  start = loadImage("images/background/tiansquare.jpg");
  // https://time.com/95642/tiananmen-square-china-anniversary/
  eind = loadImage("images/background/reclame.png");
  // https://upload.wikimedia.org/wikipedia/commons/9/94/Chairman_Mao_is_the_Red_Sun_in_Our_Hearts%2C_People%27s_Republic_of_China%2C_1968%2C_lithograph_-_Jordan_Schnitzer_Museum_of_Art%2C_University_of_Oregon_-_Eugene%2C_Oregon_-_DSC09554.jpg
  attack = loadImage("images/tankPH2.png");
  // https://www.dreamstime.com/stock-illustration-pixel-military-tank-top-video-game-image59174863
  tankman = loadImage("images/sprites/tankman0.png");
  // Door ons gemaakt
  pooh = loadImage("images/sprites/pooh.png");
  // Door ons gemaakt
  for (var b = 0; b < 3; b++) {
    frame = loadImage("images/sprites/tankman" + b + ".png");
    animatie.push(frame);
  }
  // Door ons gemaakt
  muziek = createAudio("sounds/redsun.mp3");
  // https://www.youtube.com/watch?v=vnxzf16_54Q
  oof = createAudio("sounds/oof.mp3");
  // https://www.youtube.com/watch?v=0T_NR2KY8uI
  china = createAudio("sounds/china.mp3");
  // https://youtu.be/kw9Z9ZSEHQQ
}

function setup() {
  canvas = createCanvas(961, 969);
  background('grey');
  canvas.parent('processing');
  player = new Speler(420, 830, animatie);
  spel = new tankRegen();
  spel.nieuw();
  muziek.loop();
}

function draw() {
  spel.update();
  spel.teken();
}

function mousePressed() {
  if (!spel.actief) {
    spel.actief = true;
  }
  else {
    if (spel.afgelopen) {
      spel.nieuw();
    }
  }
}