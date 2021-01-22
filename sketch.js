var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1,wall2,floor;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall1=createSprite(300,610,20,100)
	wall2=createSprite(500,610,20,100)
	floor=createSprite(400,650,200,20)
	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
	World.add(world, ground);
	 
	wall1Body = Bodies.rectangle(300,610,20,100,{isStatic:true})
	World.add(world, wall1Body);
	
	wall2Body = Bodies.rectangle(500,610,20,100,{isStatic:true})
	World.add(world, wall2Body);
	
	floorBody = Bodies.rectangle(400,650,20,100,{isStatic:true})
	World.add(world, floor)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  wall1.x= wall1Body.position.x
  wall1.y= wall1Body.position.y
  wall2.x= wall2Body.position.x
  wall2.y= wall2Body.position.y
  floor.x= floorBody.position.x
  floor.y= floorBody.position.y
  wall1.shapeColor = "red";
  wall2.shapeColor = "red";
  floor.shapeColor = "red";
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    Matter.Body.setStatic(packageBody, false )
  }
}



