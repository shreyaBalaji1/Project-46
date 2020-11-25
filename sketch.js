var Player, Player2, PlayerImg, Player2Img;
var Infector;

function preload() {
  PlayerImg = loadImage("boy.png");
  //Player2Img = loadImage("girl.png");
}

function setup() {
  createCanvas(1250,600);
  Player = createSprite(50, 200, 50, 50);
  Player.addImage(PlayerImg);
  Player.scale = 0.2


  Infector = createSprite(400, 200, 50, 50);
  //Infector.addImage(InfectorImg);
  Infector.scale = 0.2
}

function draw() {
  background(0);  

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


  drawSprites();
}