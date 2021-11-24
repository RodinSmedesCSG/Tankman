class Speler {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.snelheid = 5;
    this.score = null;
    this.level = null;
    this.breedte = 50;
    this.hoogte = 50;
  }

  beweeg() {
    if (keyIsDown(LEFT_ARROW || KeyA)) {
    this.x -= this.snelheid;
  }
    if (keyIsDown(RIGHT_ARROW || KeyD)) {
    this.x += this.snelheid;
  }
    this.x=constrain(this.x,10,canvas.width - this.breedte - 10);
  }

  teken() {
    image(player,100,100);
  }
}