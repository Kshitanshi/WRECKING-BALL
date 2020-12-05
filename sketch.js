const Engine=Matter.Engine;
const World=Matter.World;       
const Bodies=Matter.Bodies;

 var box1 ;
 var box2;
 var bird;
 var ground;
function setup() {

  engine = Engine.create();
  world = engine.world;
createCanvas(1200,800);

ground = new Ground(500, 700, 1000, 20)
rect1 = new Box(500,500,50,50)
rect2 = new Box(500,550,50,50)
rect3 = new Box(500,600,50,50)
rect4 = new Box(500,650,50,50)
rect5 = new Box(500,700,50,50)
rect6 = new Box(500,450,50,50)
rect7 = new Box(500,400,50,50)
rect8 = new Box(500,350,50,50)
rect9 = new Box(500,300,50,50)

rect11 = new Box(580,500,50,50)
rect22 = new Box(580,550,50,50)
rect33 = new Box(580,600,50,50)
rect44 = new Box(580,650,50,50)
rect55 = new Box(580,700,50,50)
rect66 = new Box(580,450,50,50)
rect77 = new Box(580,400,50,50)
rect88 = new Box(580,350,50,50)
rect99 = new Box(580,300,50,50)

ball = new Ball(300,300,80)
Rope = new rope(ball.body, {x:300, y:0}) 
}

function draw() {

  background("purple"); 
  Engine.update(engine);
 
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();
  rect6.display();
  rect7.display();
  rect8.display();
  rect9.display();

  rect11.display();
  rect22.display();
  rect33.display();
  rect44.display();
  rect55.display();
  rect66.display();
  rect77.display();
  rect88.display();
  rect99.display();

  ball.display();
  Rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}
