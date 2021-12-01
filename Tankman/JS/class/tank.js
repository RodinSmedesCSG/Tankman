let kogel = [];
let punten = 0;

class Tank {
  constructor() {
    this.d = 20; 
    this.x = random(this.d,canvas.width - this.d);
    this.y = random(this.d,50);
    this.beginSnelheid = null;
    this.snelheid = (this.beginSnelheid + random(0,10)) / 10;
  }

  teken() {
    image(attack,110,100,128,216);
  }

  vallen() {
    this.y += this.snelheid;
  }
}


/* appelvanger H3 29
Josti H2 28 omschrijven */