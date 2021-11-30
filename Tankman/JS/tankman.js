function preload() {
  bg = loadImage ("images/background/achtergrond.png");
  attack = loadImage ("images/tankPH2.png");
  tankman = loadImage ("images/tankman128.png");
  muziek1 = loadSound("sounds/redsun.mp3");
}

function setup() {
  canvas = createCanvas(961,969);
  background('grey');
  canvas.parent('processing');

  player = new Speler(420,830);
  tank = new Tank();
  kogels = new Kogel();
}

function draw() {
  background(bg);
  player.beweeg();
  tank.teken();
  player.teken();
  tank.vallen();
}
/* 
 if (frameCount % 20 == 0) {
    kogel.push(new Kogel());
  }
  
  for (let i = 0; i < kogel.length; i++) {
    kogel[i].show();
    kogel[i].beweeg();
    kogel[i].death();
    if (kogel[i].y == 380) {
      scoreCount = scoreCount + 1;
    }
  }
} 
function keyPressed() {
  if (keyCode == ENTER) {

        achtergrondmuziek.loop();
    }
  }
}
 */