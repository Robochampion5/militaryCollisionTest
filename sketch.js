var wall, thickness;
var bullet, speed, weight;

function setup(){
  createCanvas(1600,400);
 speed = random(55,90);
 thickness = random(232,321);
 weight = random(30,52);
 bullet = createSprite(50,200,50,30);
 wall=createSprite(1500,200,thickness,height/2);
}

function draw(){
  background(0,0,0);
  bullet.velocityX = speed;
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>3){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<3){
      wall.shapeColor=color(0,255,0);
    }
  }
    drawSprites();
}

function hasCollided(1bullet,2wall){
  bulletRightEdge = 1bullet.x + 1bullet.width;
  wallLeftEdge = 2wall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}
