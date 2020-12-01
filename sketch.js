var car, wall;
var speed, weight;
var deformation;


function setup() {
  createCanvas(600, 800);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(200, 200, 20, 20);
  car.velocityX = speed ;
  //car.bounceOff("wall");
  

  wall = createSprite(500, 200, 60, height / 2);
  wall.shapeColor = color(80,80,80);


}

function draw() {
  background(255, 255, 255);

  if (car.x - wall.x < wall.width / 2 + car.width / 2 &&
    wall.x - car.x < wall.width / 2 + car.width / 2) {
    car.velocityX = 0;
    
     deforation=0.5*weight*speed*speed/22509;
    
    if (deformation>180){
      car.shapeColor=color(255,0,0)
    }
    
     if (deformation<180 && deformation>100)
      car.shapeColor=color(230,230,0)
    }
  

  if (deformation<100){
      car.shapeColor=color(0,255,0)
    }
  
  createEdgeSprites();
  drawSprites();
}