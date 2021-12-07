let tanks = [];
class Tank {
  constructor(y) {
    this.x = random(80,750);
    this.y = 20;
    this.snelheid = random(2,4);
  }

  val() {
    this.y += this.snelheid;
  }

  teken() {
    for (var c = 0; c < tanks.length; c++) {
      
      tanks[c].zien 
    }
  }
    //image(attack,this.x,this.y,128,216);
  
  zien(){
    image(attack,this.x,this.y,128,216);
  }
}

/* appelvanger H3 29
Josti H2 28 omschrijven */