class speler {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.snelheid = 5;
    }

    beweeg() {
        if (keyIsDown(LEFT_ARROW || KeyA)) {
        this.x -= this.snelheid;
      }
        if (keyIsDown(RIGHT_ARROW || KeyD)) {
        this.x += this.snelheid;
      }
    }

    teken() {
        image("../../images/tankPH.png");
      }
}