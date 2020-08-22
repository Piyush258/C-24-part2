
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var gr;

var b1,b2,b3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here
	paper = new Paper(800,435+300,30);
	World.add(world, paper);
	gr = new Ground(width/2,780-300+300,width,30);
	World.add(world, gr);
	b1 = new Bin(1300,435+300,200,1);
	World.add(world, b1);
	b2 = new Bin(1190,395+200,20,300);
	World.add(world, b2);
	b3 = new Bin(1410,395+200,20,300);
	World.add(world, b3);
	Engine.run(engine);
	console.log(paper.body.position);

	
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  gr.display();
  b1.display();
  b2.display();
  b3.display();

  applyForce();
}
function applyForce(){
	if (keyWentDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-75});
	}
}



