
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
ground = new Ground (400,760,width,10)
roof = new Roof(150,100,6,160,PI/2)
bobObject1= new Bob(20,70)
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(bobObject1.x)
 bobObject1.display(); 
 roof.display();
 ground.display();
  drawSprites();
 
}



