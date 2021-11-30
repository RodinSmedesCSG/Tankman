let kogel = [];
let punten = 0;
class Kogel {
  constructor() {
    this.x = random(player.x - 100, player.x + 100);
    this.y = 0;
    this.r = 10;
  }
  show() {
    fill(255);
    ellipse(this.x, this.y, this.r);
  }

  beweeg() {
    this.y = this.y + 8;
  }

}
class Tank {
  constructor() {
    this.hoi = 20; 
    this.x = random(this.hoi,canvas.width - this.hoi);
    this.y = random(this.hoi,50);
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