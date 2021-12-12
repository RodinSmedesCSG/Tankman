class Tank {
  constructor() {
    this.x = random(80, 750);
    this.y = -200;
    this.snelheid = random(1, 6) + player.level*2;
  }

  val() {
    /*
    if (player.level == 1) {
      this.y += random(2, 4);
    }
    if (player.level == 2) {
      this.y += random(4, 5);
    }*/
    this.y += this.snelheid;
  }

  teken() {
    image(attack, this.x, this.y, 128, 216)
  }
}