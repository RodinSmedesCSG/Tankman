class Tank {
  constructor() {
    this.hoi = 20; 
    this.x = random(this.hoi,canvas.width - this.hoi);
    this.y = random(this.hoi,50);
    this.beginSnelheid = null;
    this.snelheid = (this.beginSnelheid + random(0,10)) / 10;
  }

  teken() {
    image(attack,100,100);
  }

  vallen() {
    this.y += this.snelheid;
  }
}



/* appelvanger H3 29
Josti H2 28 omschrijven */