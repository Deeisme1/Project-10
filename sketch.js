var sea;
var seaImg;
var shipImg;
var ship;

function preload(){
seaImg= loadImage("sea.png");
shipImg= loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  sea= createSprite(400,200);
  sea.addImage("sea", seaImg);
  sea.velocityX=-5;

  ship=createSprite(200,260);
  ship.addAnimation("movingship",shipImg);
  ship.scale=0.3;
}

function draw() {
  background("blue");
  
if (sea.x <0){
  sea.x= sea.width/2;
}
drawSprites();

}
