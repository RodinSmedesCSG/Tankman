class Speler {
  constructor(x,y,animaties) {
    this.x = x;
    this.y = y;
    this.animaties = animaties;
    this.snelheid = 5;
    this.nummer = 0;
    this.niveau = null;
    this.score = null;
    this.breedte = 100;
    this.hoogte = 50;
  }

  beweeg() {
    if (keyIsDown(LEFT_ARROW)) {
    this.x -= this.snelheid;
    this.nummer = 1;
   }
    if (keyIsDown(RIGHT_ARROW)) {
    this.x += this.snelheid;
    this.nummer = 2;
   }
   // als niks ingedrukt maken dat hij naar voren kijkt
   this.x = constrain(this.x,60,785);
  }


  teken() {
    image(this.animaties[this.nummer],this.x,this.y,128,128);
  }
}

/*
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
} */