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
    player.level = 0;
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
    if (player.score <= 0) {
      this.afgelopen = true;
    }
  }

  tekenLevelSpeler() {
    var tekst = 'Tankman';
    var plaatje = eind;
    push();
    fill(140);
    noStroke();
    textSize(40);
    textAlign(CENTER, CENTER);
    var hoogte = 200;
    var breedte = plaatje.width * hoogte / plaatje.height;
    image(plaatje, (canvas.width - breedte) / 2, 10, breedte, hoogte);
    fill(0);
    textSize(50);
    text(tekst, 0, 0, canvas.width, canvas.height * 2 / 3);
    pop();
  }

  beginScherm() { //https://youtu.be/TgHhEzKlLb4
    push();
    muziek.volume(0.02);
    background(start);
    //fill(0, 139, 139, .8);
    //rect(0, 0, canvas.width, canvas.height);
    textAlign(CENTER, TOP);
    textSize(25);
    textStyle(BOLD);
    fill(0);
    text("Tankman 坦克人\n\nProbeer zoveel mogelijk tanks te ontwijken en stop de communisten!\n\nGebruik de pijltjestoetsen voor de besturing.\n\nDruk op 'h' voor hulp.\n\nKlik om het spel te starten.", 0, canvas.height / 4, canvas.width, canvas.height)
    pop();
  }

  eindScherm() {
    fill(0, 139, 139, .5);
    rect(0, 0, canvas.width, canvas.height);
    textSize(50);
    var tekst = "Je bent gepakt door de Chinese overhei! \nJouw level: " + player.level + "\n\nKlik voor een nieuw spel.";
    pop();
    push();
    textAlign(CENTER, CENTER);
    fill(0);
    text(tekst, 0, 0, canvas.width, canvas.height);
    this.tekenLevelSpeler();
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
        text("Score: " + player.score + "\nLevel: " + player.level, 10, 30);
        player.teken();
        for (var d = 0; d < this.tanks.length; d++) {
          this.tanks[d].teken();
        }
        pop();
      }
    }
  }

  hulp() {
    if (keyIsDown(72)) {
      textSize(25);
      text("Tip: ontwijk de tanks. \n Je beweegt met het linker en rechter pijltje");
      textAlign(CENTER, TOP);
    }
  }

  nieuw() {
    this.actief = false;
    this.afgelopen = false;
    this.level = 1;
    this.tanks = [];
  }
}