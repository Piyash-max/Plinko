const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine;
var world;
var division=[]
var 


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

  ground = new Ground(0,780,2000,20)
  division  = new Division()
}

function draw() {
  background(0);  
 Engine.update(engine);
 ground.display();






  drawSprites();
}