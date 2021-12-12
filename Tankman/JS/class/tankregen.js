class tankRegen {
  constructor() {
    this.afgelopen = null;
    this.gewonnen = null;
    this.level = null;
    this.actief = false;
    this.tanks = null;
  }

  maakRegen() {
    if (frameCount % 100 == 0) {
      this.tanks.push(new Tank());
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
    if (player.score > 50) {
      player.level = 2;
    }
    if (player.score >= 100) {
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

  beginScherm() {
    push();
    muziek.volume(0.02);
    background(start);
    textAlign(CENTER, TOP);
    textSize(25);
    textStyle(BOLD);
    fill(0);
    text("Tankman\n\nJe bent een Chinese demonstrant op het Tiananmenplein in Peking op\n15 april 1989.\n\nProbeer zoveel mogelijk tanks te ontwijken en stop de communisten!\n\nGebruik de pijltjestoetsen voor de besturing.\n\nHet doel is om 100 tanks te ontwijken, succes!\n\nKlik om het spel te starten.", 0, canvas.height / 4, canvas.width, canvas.height)
    pop();
  }

  eindScherm() {
    fill(0, 139, 139, .5);
    rect(0, 0, canvas.width, canvas.height);
    textSize(50);
    var tekst = "Je bent gepakt door de Chinese overheid!\n\nKlik voor een nieuw spel.";
    pop();
    push();
    textAlign(CENTER, CENTER);
    fill(0);
    text(tekst, 0, 0, canvas.width, canvas.height);
    this.tekenLevelSpeler();
  }

  winScherm() {
    fill(0, 139, 139, .5);
    rect(0, 0, canvas.width, canvas.height);
    textSize(50);
    var tekst2 = "Je hebt gewonnen van de Chinese overheid!\n\nKlik voor een nieuw spel.";
    pop();
    push();
    textAlign(CENTER, CENTER);
    fill(0);
    text(tekst2, 0, 0, canvas.width, canvas.height);
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
      if (this.gewonnen) {
        this.winScherm();
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

  nieuw() {
    this.actief = false;
    this.afgelopen = false;
    this.gewonnen = false;
    player.level = 1;
    player.score = 1;
    this.tanks = [];
  }
}