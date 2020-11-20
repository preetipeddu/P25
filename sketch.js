
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall;
var dustbin1, dustbin2, dustbin3;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paperBall = new Paper(40,490,70);
  dustbin  = new Dustbin(600,420,190,190);
  ground = new Ground(400,520,800,20);

  Engine.run(engine);

     
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  paperBall.display();
  dustbin.display();
  ground.display();

}

function keyPressed(){
   if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paperBall.body, paperBall.position,{x:85,y:-85})

   }


}



