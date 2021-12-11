class Speler {
  constructor(x, y, animaties) {
    this.x = x;
    this.y = y;
    this.d = 20;
    this.animaties = animaties;
    this.snelheid = 5;
    this.nummer = 0;
    this.breedte = 128;
    this.hoogte = 128;
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
      tank.x = -1500;
      tank.y = height / 2;
      tank.snelheid = 0;
    }
    if (tank.y > canvas.height) {
      tank.x = -1000;
      tank.y = height / 2;
      tank.snelheid = 0;
    }
  }
}