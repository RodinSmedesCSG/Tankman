class tank {
    constructor() {
       this.hoi = 20;
       this.bAppel = appel.width *  this.hoi / appel.height;
       this.x = random(this.hoi,canvas.width - this.hoi);
       this.y = random(this.d,50);
       this.beginSnelheid = bs;
       this.snelheid = (this.beginSnelheid + random(0,10)) / 10;
    }

    teken() {
        push();
        fill(100,100,100,.25);
        stroke('red');
        // ellipse(this.x,this.y,this.d); // hitbox
        image(appel,this.x - 0.9 * this.d / 2,this.y - this.d / 2,this.bAppel,this.d);
        pop();
      }
}

/* appelvanger H3 29
Josti H2 28 */