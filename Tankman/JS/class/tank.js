class Tank {
  constructor() {
    this.x = random(80, 750);
    this.y = -200;
    this.snelheid = random(2, 4);
  }

  val() {
    this.y += this.snelheid;
  }

  teken() {
      image(attack, this.x, this.y, 128, 216)
  }
}