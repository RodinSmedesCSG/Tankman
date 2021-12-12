class tankRegen {
  constructor() {
    this.afgelopen = null;
    this.highscore = 0;
    this.level = null;
    this.moeilijkheidsGraad = 5;
    this.actief = false;
    this.tanks = null;
  }


  nieuw() {
    this.actief = false;
    this.afgelopen = false;
    player.score = 20;
    player.niveau = 0;
    this.moeilijkheidsGraad = 5;
    this.tanks = [];
    for (var d = 0; d < 2; d++) {
      this.tanks.push(new Tank(this.moeilijkheidsGraad));
    }
  }

  maakRegen() {
    if (frameCount % 100 == 0) {
      this.moeilijkheidsGraad++;
      this.tanks.push(new Tank(this.moeilijkheidsGraad));
    }
  }

  update() {
    if (this.actief && player.score > 0) {
      this.maakRegen();
      for (var d = 0; d < this.tanks.length; d++) {
        this.tanks[d].val();
      }
      player.beweeg();
      player.keyReleased();
      for (var d = 0; d < this.tanks.length; d++) {
        player.raak(this.tanks[d]);
      }
    }
    //if (player.score <= 0) {
      if (tank.y > 500) {
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
    textAlign(CENTER, CENTER);
    var hoogte = 100;
    var breedte = 100;
    image(plaatje, (canvas.width - breedte) / 2, 10, breedte, hoogte);
    text(tekst, 0, 0, canvas.width, canvas.height * 2 / 3);
    pop();
  }

  beginScherm() { //https://youtu.be/TgHhEzKlLb4
    push();
    muziek1.volume(0.02);
    background(start);
    //fill(0, 139, 139, .8);
    //rect(0, 0, canvas.width, canvas.height);
    textAlign(CENTER, TOP);
    textSize(25);
    textStyle(BOLD);
    fill(0);
    text("Tankman\n\nProbeer zoveel mogelijk tanks te ontwijken en stop de communisten!\n\nGebruik de pijltjestoetsen voor de besturing.\n\nDruk op 'h' voor hulp.\n\nKlik om het spel te starten.", 0, canvas.height / 4, canvas.width, canvas.height)
    pop();
  }

  eindScherm() {
    fill(0, 139, 139, .5);
    rect(0, 0, canvas.width, canvas.height);
    var tekst = "Je bent gepakt door de Chinese overheid 的笑容 ! \nJouw niveau: " + player.niveau + "\n\nKlik voor een nieuw spel.";
    push();
    textAlign(CENTER, CENTER);
    fill(0);
    text(tekst, 0, 0, canvas.width, canvas.height);
    pop();
    this.tekenNiveauSpeler();
  }

  teken() {
    background(bg);
    player.beweeg();
    player.teken();
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
        text(player.score + " levens (niveau: " + player.niveau + ")", 10, 30);
        player.teken();
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
    player.score = 5;
    player.niveau = 0;
    this.level = 1;
    this.tanks = [];
  }
}
