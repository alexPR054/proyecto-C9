var caja 
function setup() {
  createCanvas(400,400);
  caja =  createSprite(100,100,100,100);
  
}
function draw() 
{
  background(30);
drawSprites();

if (keyDown("d")) {
  caja.x=caja.x+3;
  
  }
  if (keyDown("a")) {
  caja.x=caja.x-3;

  }
if (keyDown("w")) {
  caja.y=caja.y-3;
}
if (keyDown("s")) {
  caja.y=caja.y+3;
}
}