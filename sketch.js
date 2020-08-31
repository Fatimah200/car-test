//creating global variables
var car,wall;
var speed,weight;

//function setup
function setup() {

  //size of canvas
  createCanvas(1600,400);

//random numbers for speed and weight
speed=random(55,90)
weight=random(400,1500);

//creating car
car=createSprite(50,200,50,50);
car.velocityX = speed;

//creating wall
wall=createSprite(1500,200,60,height/2);
wall.shapeColor=color(80,80,80);

}
  
//function draw
function draw() {
  
  //background color
  background(0,0,0);  

  //allowing car to change color once speed is set
  if(wall.x=car.x< (car.width+wall.width)/2)
  {
car.velocityX=0;
var defomation=0.5*weight*speed*speed/22509;
if(defromation>180);
{

car.shapeColor=color(255,0,0);
  
}
if(defromation<180 && defromation>100)
{
car.shapeColor=color(230,230,0);
}

if(defromation<100)
{
car.shapeColor=color(0,255,0);
}
  }

 
drawSprites();
}
