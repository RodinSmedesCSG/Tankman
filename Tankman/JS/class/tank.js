let kogel = [];
let punten = 0;

class Tank {
  constructor(b) {
    this.d = 20;
    this.x = random(this.d,canvas.width - this.d);
    this.y = -this.d;
    this.basisSnelheid = b;
    this.snelheid = (this.basisSnelheid + random(0,10)) / 10;
  }

  val() {
    this.y += this.snelheid;
  }

  teken() {
    push();
    image(attack,this.x,this.y,128,216);
    pop();
  }
}



/* appelvanger H3 29
Josti H2 28 omschrijven */