const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const bgSound = new Audio("bgSound.wav");
const punchSound = new Audio("punch1effect.wav");
punchSound.volume = 0.1;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var destroyingBall;
var launcherObject;
var launchForce = 100;
function preload() {
  polygon_img=loadImage("polygon.png");
  // bg = loadImage("bg.png");
  bg = loadImage("bgFighting.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  // border = new Border();
  // ground1 = new Ground(890, 200, 20, 400);
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(330,275,40,80);
  block2 = new Block(330,275,40,80);
  block3 = new Block(360,275,40,80);
  block4 = new Block(390,275,40,80);
  block5 = new Block(420,275,40,80);
  block6 = new Block(450,275,40,80);
  block7 = new Block(480,275,40,80);
  //level two
  block8 = new Block(330,235,40,80);
  block9 = new Block(360,235,40,80);
  block10 = new Block(390,235,40,80);
  block11 = new Block(420,235,40,80);
  block12 = new Block(450,235,40,80);
  //level three
  block13 = new Block(360,195,40,80);
  block14 = new Block(390,195,40,80);
  block15 = new Block(420,195,40,80);
  //top
  block16 = new Block(390,155,40,80);
  //ball and slingshot
  destroyingBall = new WreakingBall(100, 200, 70);
  launcherObject = new Launcher(destroyingBall.body, {x: 100, y: 200})

  block1T = new Block(625,175,30,40);
  block2T = new Block(655,175,30,40);
  block3T = new Block(685,175,30,40);
  block4T = new Block(715,175,30,40);
  block5T = new Block(745,175,30,40);
  block6T = new Block(775,175,30,40);
  // next layer
  block7T = new Block(655,135,30,40);
  block8T = new Block(685,135,30,40);
  block9T = new Block(715,135,30,40);
  block10T = new Block(745,135,30,40);
  // next layer
  block11T = new Block(685,95,30,40);
  block12T = new Block(715,95,30,40);
  //top layer
  block13T = new Block(700,45,30,40);

}
function draw() {
  // background("lightgrey"); 
  background(bg);
 
  textSize(20);
  fill("lightyellow");
  bgSound.play();
  bgSound.loop = true;

  // ground.display();
  // border.display();
  // ground1.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("white");
  block1T.display();
  block2T.display();
  block3T.display();
  block4T.display();
  block5T.display();
  block6T.display();
  fill("purple");
  block7T.display();
  block8T.display();
  block9T.display();
  block10T.display();
  fill("orange")
  block11T.display();
  block12T.display();
  fill("red");
  block13T.display();

  destroyingBall.display();
  fill("green");
  launcherObject.display();

  detectollision(destroyingBall, block1);
  detectollision(destroyingBall, block2);
  detectollision(destroyingBall, block3);
  detectollision(destroyingBall, block4);
  detectollision(destroyingBall, block5);
  detectollision(destroyingBall, block6);
  detectollision(destroyingBall, block7);
  detectollision(destroyingBall, block8);
  detectollision(destroyingBall, block9);
  detectollision(destroyingBall, block10);
  detectollision(destroyingBall, block11);
  detectollision(destroyingBall, block12);
  detectollision(destroyingBall, block13);
  detectollision(destroyingBall, block14);
  detectollision(destroyingBall, block15);
  detectollision(destroyingBall, block16);
}

function detectollision(ldestroyingball,lblock) {
  blockBodyPosition=  lblock.body.position
  destroyingBallBodyPosition=ldestroyingball.body.position

  var distance=dist(destroyingBallBodyPosition.x, destroyingBallBodyPosition.y, blockBodyPosition.x, blockBodyPosition.y)
  if(distance<=lblock.r+ldestroyingball.r)
  {
    Matter.Body.setStatic(lblock.body,false);
  }
}

function mouseDragged() {
  Matter.Body.setPosition(destroyingBall.body, {x: mouseX , y: mouseY});
}

// function touchMoved() {
//   Matter.Body.setPosition(destroyingBall.body, {x: mouseX , y: mouseY});
// }

function mouseReleased(){
  launcherObject.fly();
}

function keyPressed() {
  if (keyCode == 32) {
    Matter.Body.setPosition(destroyingBall.body, {x: 100, y: 200});
    launcherObject.attach(destroyingBall.body);
  }
}
