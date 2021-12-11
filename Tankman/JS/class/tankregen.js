class tankRegen {
  constructor() {
    this.afgelopen = null;
    this.highscore = 0;
    this.level = null;
    this.moeilijkheidsGraad = 5;
    this.actief = false;
    this.afgelopen = null;
    this.tanks = null;
    this.speler = new Speler('hasan');
  }

  
  nieuw() {
    this.actief = false;
    this.afgelopen = false;
    this.speler.score = 20;
    this.speler.niveau = 0;
    this.moeilijkheidsGraad = 10;
    this.tankss = [];
    for (var d = 0;d < 2;d++) {
      this.tanks.push(new Tank(this.moeilijkheidsGraad));
    }  
  }

  maakRegen() {
    if (frameCount % 29 == 0 || frameCount % 59 == 0 || frameCount % 79 == 0 || frameCount % 97 == 0 || frameCount % 103 == 0 || frameCount % 113 == 0) {
      this.moeilijkheidsGraad++;
      this.tanks.push(new Tank(this.moeilijkheidsGraad));
    }
  } 

  update() {
    if (this.actief && this.speler.score > 0) {
      this.maakRegen();
      for (var d=0;d<this.tanks.length;d++) {
            this.tanks[d].val();
      }
      this.speler.verwerkInvoer();
      for (var d = 0;d < this.tanks.length;d++) {
          this.speler.vang(this.tanks[d]);
      }
    }
    if (this.speler.score <= 0) {
      this.afgelopen = true;
    }
  }    

  tekenNiveauSpeler() {
    var tekst = 'tankman';
    var plaatje = attack;
    push();
    fill(140);
    stroke(20);
    strokeWeight(10);
    textSize(40);
    textAlign(CENTER,CENTER);
    var hoogte = 100;
    var breedte = 100;
    image(plaatje,(canvas.width - breedte) / 2,10,breedte,hoogte);
    text(tekst,0,0,canvas.width,canvas.height * 2/ 3);
    pop();      
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
    muziek1.volume(0.02);
    fill(0, 139, 139, .8);
    rect(0, 0, canvas.width, canvas.height);
    textAlign(CENTER, TOP);
    fill(0);
    text("Tankman\n\nProbeer zoveel mogelijk tanks te ontwijken en stop de communisten! The Tiananmen Square protests of 1989 天安門大屠殺.\n\nGebruik de pijltjestoetsen voor de besturing. Klik om het spel te starten.", 0, canvas.height / 4, canvas.width, canvas.height)
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
        text(this.speler.score + " levens (niveau: " + this.speler.niveau + ")", 10, 30);
        this.speler.teken();
        for (var d = 0; d < this.tanks.length; d++) {
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
