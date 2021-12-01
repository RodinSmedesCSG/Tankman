class Speler {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.snelheid = 5;
    this.framenummer = 2;
    this.niveau = null;
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

  teken() {
    image(tankman,this.x,this.y);
  }
}