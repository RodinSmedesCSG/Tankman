function preload() {
  bg = loadImage ("images/background/achtergrond.png");
  attack = loadImage ("images/tankPH2.png");
  tankmanL = loadImage ("images/tankmanL.png");
  tankmanR = loadImage ("images/tankmanR.png")
  meme = loadImage ("images/meme.jpg");
  muziek1 = loadSound("sounds/redsun.mp3");
}

function setup() {
  canvas = createCanvas(961,969);
  background('grey');
  canvas.parent('processing');
  player = new Speler(420,830);
  tank = new Tank();

  this.druppels = null;
  this.moeilijkheidsGraad = null;
  this.actief = false;
  this.afgelopen = null;
}



function draw() {
  if (keyIsDown(ESCAPE)) {
    background(meme);
  }
  else {
    background(bg);
  }
  player.beweeg();
  tank.val();
  player.teken();
  tank.teken();

  /* MUZIEK LATER FIXEN
  muziek1.loop = false;
  muziek1.play();
  */

}
/* 

function keyPressed() {
  if (keyCode == ENTER) {

        achtergrondmuziek.loop();
    }
  }
}
 */