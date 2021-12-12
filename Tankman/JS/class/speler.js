class Speler {
  constructor(x, y, animaties) {
    this.x = x;
    this.y = y;
    this.d = 20;
    this.animaties = animaties;
    this.snelheid = 3;
    this.nummer = 0;
    this.breedte = 128;
    this.hoogte = 128;
    this.level = 0;
    this.score = 1;
  }

  beweeg() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.snelheid;
      this.nummer = 1;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.snelheid;
      this.nummer = 2;
    }
    this.x = constrain(this.x, 60, 785);
  }

  keyReleased() {
    this.nummer = 0;
    return false;
  }

  teken() {
    image(this.animaties[this.nummer], this.x, this.y, 128, 128);
  }

  raak(tank) {
    if (this.x >= tank.x - 96 && this.x <= tank.x + 96 && this.y >= tank.y - 128 && this.y <= tank.y + 128) {
      spel.afgelopen = true;
    }
    if (tank.y > height) {
      this.score++;
      tank.x = -1000;
      tank.y = height / 2;
      tank.snelheid = 0;
    }
  }
}