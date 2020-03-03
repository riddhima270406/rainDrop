const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.World;

  
}

function draw() {
  background("lightblue");  

  Engine.update(engine);
 
if(FrameRate/5 == 0){
rainDrop = new RainDrop(Math.random(0,800),Math.random(0,400));
rainDrop.display();
}
  
    rainDrop.display();
  drawSprites();
}