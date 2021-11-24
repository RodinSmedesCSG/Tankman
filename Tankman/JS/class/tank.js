// *class Tank {
  constructor() {
    this.hoi = 20; 
    this.x = random(this.hoi,canvas.width - this.hoi);
    this.y = random(this.hoi,50);
    this.beginSnelheid = b;
    this.snelheid = (this.beginSnelheid + random(0,10)) / 10;
  }

  teken() {
    push();
    fill(100,100,100,.25);
    stroke('red');
    // ellipse(this.x,this.y,this.d); // hitbox
    image(tankPH,this.x - 0.9 * this.hoi / 2,this.y - this.hoi / 2,this.bTank,this.hoi);
    pop();
  }

  vallen() {
    this.y += this.snelheid;
  }
}
    

/* appelvanger H3 29
Josti H2 28 omschrijven */