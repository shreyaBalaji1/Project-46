var Player, Player2, PlayerImg, Player2Img;
var Infector;
var bground, backgroundImg;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;

function preload() {
  PlayerImg = loadImage("boy.png");
  //Player2Img = loadImage("girl.png");
  backgroundImg = loadImage("backg.jpg");
}

function setup() {
  createCanvas(1250,600);

  bground = createSprite(580, height/2, 50, 50);
  bground.addImage(backgroundImg);
  bground.scale = 1.17;

  Player = createSprite(50, 200, 50, 50);
  Player.addImage(PlayerImg);
  Player.scale = 0.16;

  /*wall1 = createSprite(55, 80, 3, 70);
  wall2 = createSprite(5, 120, 3, 70);
  wall3 = createSprite(0, 50, 70, 3);
  wall4 = createSprite(-65, 80, 3, 70);
  */

  //Infector = createSprite(400, 200, 50, 50);
  //Infector.addImage(InfectorImg);
  //Infector.scale = 0.2
}

function draw() {
  background(255);  

  /*** CONTROLS - PLAYER 1  - ARROW KEYS*/
  if(keyDown(RIGHT_ARROW)) {
    Player.x = Player.x+4;
  }
  if(keyDown(LEFT_ARROW)) {
    Player.x = Player.x-4;
  }
  if(keyDown(UP_ARROW)) {
    Player.y = Player.y-4;
  }
  if(keyDown(DOWN_ARROW)) {
    Player.y = Player.y+4;
  }

  camera.position.x = Player.x + 400;

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

  drawSprites();
}