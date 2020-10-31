var gameObject1, gameObject2;


function setup() {
  createCanvas(1200,800);
  gameObject1 = createSprite(400, 400, 50, 80);
  gameObject1.shapeColor = "green";
  gameObject1.debug = true;
  gameObject2 = createSprite(800, 400,80,30);
  gameObject2.shapeColor = "green";
  gameObject2.debug = true;

  gameObject2.velocityX = -5;
  gameObject1.velocityX = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(gameObject1,gameObject2);
  
  drawSprites();
}
