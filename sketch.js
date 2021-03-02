const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, boxAnim, copHeli;

function preload() {
  boxAnim.addAnimation = ("package.png")
    
  copHeli.addAnimation = ("helicopter.png")
}

function setup() {
 
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var box_options ={
        restitution: 1.0
    }
  
}

function draw() {
 
  background(220);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
 
  if (keyDown(DOWN_ARROW)) {
    box = createSprite(200,200,20,20)
    rectMode(CENTER);
    rect(box.position.x, box.position.y, 20, 20);
    box.display();
    box.addAnimation = boxAnim;
}

    helicopter = createSprite(200,200,30,30)
    helicopter.addAnimation = copHeli;
  
}