class Speler {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.snelheid = 5;
    this.framenummer = 2;
    this.niveau = null;
    this.score = null;

    this.breedte = 100;
    this.hoogte = 50;
  }

  beweeg() {
    if (keyIsDown(LEFT_ARROW)) {
    this.x -= this.snelheid;
    this.framenummer = 2;
   }
    if (keyIsDown(RIGHT_ARROW)) {
    this.x += this.snelheid;
    this.framenummer = 1;
   }
   this.x = constrain(this.x,80,750);

   
  }

  vang(druppel) {
    if (druppel.x > this.x && druppel.x < this.x + this.breedte && druppel.y > this.y && druppel.y < this.y + druppel.d) {
      druppel.y = canvas.height + druppel.d;
      this.score++;
      this.niveau++;
      druppel.x = -1000; 
      druppel.y = height / 2;
      druppel.snelheid = 0;
    }
    if (druppel.y > height) {
      this.score--;
      druppel.x = -1000;
      druppel.y = height / 2;
      druppel.snelheid = 0;
    }
  }


  teken() {
    image(tankman,this.x,this.y);
    push();
    translate(this.x,this.y);
    fill(20,20,20);
    rect(0,0,this.breedte,this.hoogte);
    pop();
  }
}