class Tank {
  constructor() {
    this.x = random(80, 750);
    this.y = -200;
    this.snelheid = random(1, 6) + player.level * 2;
  }

  val() {
    this.y += this.snelheid;
    if (spel.afgelopen) {
      return player.score;
    }
  }

  teken() {
    image(attack, this.x, this.y, 128, 216)
  }
}