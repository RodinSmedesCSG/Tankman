class Speler {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.snelheid = 5;
  }

  beweeg() {
    if (keyIsDown(LEFT_ARROW)) {
    this.x -= this.snelheid;
   }
    if (keyIsDown(RIGHT_ARROW)) {
    this.x += this.snelheid;
   }
  }

  teken() {
    image(tankman,420,830);
  }
}