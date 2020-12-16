var p1,p2,player1,player2;
function preload()
{
 p1=loadAnimation("player1b.png","player1a.png")
 p2=loadAnimation("player2a.png","player2b.png")
 b=loadImage("ground.png")
}

function setup() {
  createCanvas(800,400);
  player1=createSprite(100,250);
  player1.addAnimation("redplayer", p1);
  player1.scale=0.5;

  player2=createSprite(300,250);
  player2.addAnimation("yellowplayer", p2);
  player2.scale=0.5;

  ground=createSprite(400,200)
  ground.addImage(b)

}

function draw() {
  background(255); 
  drawSprites();
}