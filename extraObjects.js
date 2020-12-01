class Objects{
    constructor(){
        this.shield = [];
        this.invisibility = [];
        this.weapons = [];
        this.walls = [];
        this.health = [];
        this.image1 = loadImage("invisibility.png");
    }

    //Health bar - player & Infector
    Health(x,y){
        this.health.push(createSprite(x, y, 10, 10));
        this.health[this.health.length-1]//.addImage();
        healthGroup.add(this.health[this.health.length-1]);
    }

    //Shield/Immunity
    Shield(x,y){
        this.shield.push(createSprite(x, y, 10, 10));
        this.shield[this.shield.length-1]//.addImage();
        shieldGroup.add(this.shield[this.shield.length-1]);
    }

    //Invisibility
    Invisibility(x,y) {
        this.invisibility.push(createSprite(x, y, 10, 10));
        this.invisibility[this.invisibility.length-1]//.addImage(this.image1);
        invisibilityGroup.add(this.invisibility[this.invisibility.length-1]);
    }

    //weapons-masks, gloves, sanitizers, face shields, 
    Weapons(x,y) {
        this.weapons.push(createSprite(x, y, 10, 10));
        this.weapons[this.weapons.length-1]//.addImage();
        weaponsGroup.add(this.weapons[this.weapons.length-1]);
    }

    //Outer walls of the maze
    Walls(x,y,width,height) {
        this.walls.push(createSprite(x, y, width, height));
        this.walls[this.walls.length-1]//.shapeColor("red");
        wallGroup.add(this.walls[this.walls.length-1]);
    }    
}
