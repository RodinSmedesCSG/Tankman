class tankRegen {
    constructor() {
    this.afgelopen = null;
    this.highscore = 0;
    this.level = null;
    this.moeilijkheidsGraad = null;
    
    }
    eindScherm() {
        fill(0, 139, 139,.5);
        rect(0,0,canvas.width,canvas.height);      
        var tekst="Je bent gepakt door de Chinese overheid 的笑容 \nJouw niveau: "+this.speler.niveau+"\n\nKlik voor een nieuw spel.";
        push();
        textAlign(CENTER,CENTER);
        fill(0);
        text(tekst,0,0,canvas.width,canvas.height);
        pop();
        this.tekenNiveauSpeler();
      }

    beginScherm() {
        push();
        fill(0, 139, 139, .5);
        rect(0, 0, canvas.width, canvas.height);
        textAlign(CENTER, TOP);
        fill(0);
        text("Tankman\n\nProbeer zoveel mogelijk tanks te ontwijken en stop de communisten!.\n\nGebruik de pijltjestoetsen voor de besturing. Klik om het spel te starten.", 0, canvas.height / 4, canvas.width, canvas.height)
        pop();
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
