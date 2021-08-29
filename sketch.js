var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.circle;
	Matter.Body.applyForce;

	Engine.run(engine);

	groundObj.display();
	leftSide = new ground(1100,600,20,120);

	function keyPressed() {
		if (keyCode === UP_ARROW) {


			Matter.Bodies.applyForce;
		}
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



