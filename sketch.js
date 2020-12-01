var Player, Player2, PlayerImg, Player2Img;
var Infector;
var bground, backgroundImg;
var wallGroup, invisibilityGroup, weaponsGroup, healthGroup, shieldGroup;
var objects;

function preload() {
  PlayerImg = loadImage("boy.png");
  //Player2Img = loadImage("girl.png");
  backgroundImg = loadImage("bg.png");
}

function setup() {
  createCanvas(1300,600);
/*
  bground = createSprite(580, height/2, 50, 50);
  bground.addImage(backgroundImg);
  bground.scale = 1.17;
  */

  wallGroup = new Group();
  invisibilityGroup = new Group();
  weaponsGroup = new Group();
  healthGroup = new Group();
  shieldGroup = new Group();

  Player = createSprite(75, 60, 50, 50);
  Player.addImage(PlayerImg);
  Player.scale = 0.11;

  objects = new Objects();
  objects.Invisibility(35, 560);
  objects.Invisibility(1100, 200);
  objects.Invisibility(2590, 65);
  objects.Invisibility(4940, 475);
  objects.Shield(840, 40);
  objects.Shield(1950, 360);
  objects.Shield(3500, 515);
  objects.Shield(3500, 515);
  objects.Shield(4250, 200);
  objects.Weapons(1000, 530);
  objects.Weapons(725, 530);
  objects.Weapons(1320, 100);
  objects.Weapons(1960, 560);
  objects.Weapons(2950, 120);
  objects.Weapons(4250, 430);

  objects.Walls(295, 335, 67, 3);
  objects.Walls(135, 18, 170, 3);
  objects.Walls(535, 18, 656, 3);
  objects.Walls(50, 97, 3, 160);
  objects.Walls(10, 460, 3, 250);
  objects.Walls(135, 583, 250, 3);
  objects.Walls(262, 460, 3, 250);
  objects.Walls(45, 336, 66, 3);
  objects.Walls(78, 257, 3, 160);
  objects.Walls(64, 177, 30, 3);

  //Infector = createSprite(400, 200, 50, 50);
  //Infector.addImage(InfectorImg);
  //Infector.scale = 0.2
}

function draw() {
  background(25,100,120); 
  image(backgroundImg,0,0, 5000, 600) 

  /*** CONTROLS - PLAYER 1  - ARROW KEYS*/
  if(keyDown(RIGHT_ARROW)) {
    Player.x = Player.x+4;
  }
  if(Player.x>0)
    if(keyDown(LEFT_ARROW)) {
      Player.x = Player.x-4;
    }
  if(keyDown(UP_ARROW)) {
    Player.y = Player.y-4;
  }
  if(keyDown(DOWN_ARROW)) {
    Player.y = Player.y+4;
  }

  //console.log(Player.x);
  if(Player.x>50)
    camera.position.x = Player.x + 575;

  /*
  /*** CONTROLS - PLAYER 2  - AWSD
  if(keyDown("d")) {
    Player2.x = Player2.x+4;
  }
  if(keyDown("a")) {
    Player2.x = Player2.x-4;
  }
  if(keyDown("w")) {
    Player2.y = Player2.y-4;
  }
  if(keyDown("s")) {
    Player2.y = Player2.y+4;
  }
  */

  //strokeweight(7);

  /*for(var i = 75; i<3; i++) {
    line();
  }*/

  Player.collide(wallGroup);

  

  drawSprites();
}