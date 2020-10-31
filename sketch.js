var safePlayer1, safePlayer2, safePlayer1Img, safePlayer2Img;

function preload() {
  safePlayer1Img = loadImage("boy.jpeg");
  safePlayer2Img = loadImage("girl.jpeg");
}

function setup() {
  createCanvas(800,400);
  safePlayer1 = createSprite(200, 200, 50, 50);
  safePlayer1.addImage(safePlayer1Img);
  safePlayer1.scale = 0.2

  safePlayer1 = createSprite(400, 200, 50, 50);
  safePlayer1.addImage(safePlayer2Img);
  safePlayer1.scale = 0.2
}

function draw() {
  background(255,255,255);  
  drawSprites();
}