class tankRegen {
    constructor() {
        this.afgelopen = null;
        this.highscore = 0;
        this.level = null;
        this.moeilijkheidsGraad = null;
    }

eindScherm() {
    fill(0, 139, 139, .5);
    rect(0, 0, canvas.width, canvas.height);
    var tekst = "Je bent gepakt door de Chinese overheid 的笑容 ! \nJouw niveau: " + this.speler.niveau + "\n\nKlik voor een nieuw spel.";
    push();
    textAlign(CENTER, CENTER);
    fill(0);
    text(tekst, 0, 0, canvas.width, canvas.height);
    pop();
    this.tekenNiveauSpeler();
}

beginScherm() { //https://youtu.be/TgHhEzKlLb4
    push();
    fill(0, 139, 139, .5);
    rect(0, 0, canvas.width, canvas.height);
    textAlign(CENTER, TOP);
    fill(0);
    text("Tankman\n\nProbeer zoveel mogelijk tanks te ontwijken en stop de communisten!.\n\nGebruik de pijltjestoetsen voor de besturing. Klik om het spel te starten.", 0, canvas.height / 4, canvas.width, canvas.height)
    pop();
}

teken() {
    if (!this.actief) {
        this.beginScherm();
      }
      else {
        if (this.afgelopen) {
          this.eindScherm();
        }
        else {
          push();
          noStroke();
          fill('black');
          textSize(30);
          text(this.speler.score+" levens (niveau: "+this.speler.niveau+")",10,30);  
          this.speler.teken();
          for (var d=0;d<this.tanks.length;d++) {
              this.tanks[d].teken(); //geen functie op moment vgm
          }
          pop();      
          }
        }
      }


nieuw() {
    this.actief = false;
    this.afgelopen = false;
    this.speler.score = 5;
    this.speler.niveau = 0;
    this.level = 1;
    this.tanks = [];
}
}
