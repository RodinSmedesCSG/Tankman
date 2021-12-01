class Tank {
  constructor(y) {
    this.x = random(80,750);
    this.y = 20;
    this.snelheid = 3;
  }

  val() {
    this.y += this.snelheid;
  }

  teken() {
    for (var b = 0; b < 5; b++) {
      image(attack,this.x,this.y,128,216);
    }
    //image(attack,this.x,this.y,128,216);
  }
}

/* appelvanger H3 29
Josti H2 28 omschrijven */