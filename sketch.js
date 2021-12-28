
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine ;
let world;

var ball;
var ground;
var stick1,stick2;
var btn1;

function setup(){
	createCanvas(800,800);
	engine= Engine.create();
	world=  engine.world;

	var ball_options = {
		restitution :0.95
	};

	ball = Bodies.circle(200,200,10,ball_options)
	World.add(world,ball);

    var ground_options = {
		isStatic: true
	};

    ground = Bodies.rectangle(400,790,800,10, ground_options);
    World.add(world,ground);

	stick1 = Bodies.rectangle(700,740,10,100,ground_options);
	World.add(world,stick1)

	stick2 = Bodies.rectangle(600,740,10,100,ground_options);
    World.add(world,stick2);

    btn1 = createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(force);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}

function draw(){
	background(51);

	ellipse(ball.position.x,ball.position.y, 20);
    rect(ground.position.x,ground.position.y, 800,10 );
	rect(stick1.position.y, stick1.position.y,10,100);
    rect(stick2.position.x, stick2.position.y, 10,100);
	Engine.update(engine);
}

function force() 
{
	Matter.Body.applyForce(ball, {x : 0, y: 0},{x:0.02  , y:0});
}