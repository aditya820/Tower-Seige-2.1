const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var stand,stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11;
var box12, box13, box14, box15, box16, box17, box18, box19, box20, box21;
var box22, box23, box24, box25, box26, box27, box28, box29, box30;
var box31, box32, box33, box34, box35, box36, box37, box38;
var box39, box40, box41, box42, box43, box44, box45;
var box46, box47, box48, box49, box50, box51;
var box52, box53, box54, box55, box56;
var box57, box58, box59, box60
var box61, box62, box63;
var box64, box65;
var box66;

var Box1, Box2, Box3, Box4, Box5, Box6, Box7
var Box8, Box9, Box10, Box11, Box13, Box13
var Box14, Box15, Box16, Box17, Box18
var Box19, Box20, Box21, Box22
var Box23, Box24, Box25
var Box26, Box27
var Box28 

var polygon;

var chain;

function preload(){

}

function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(800,690,1600,20,"darkred");

  stand = new Ground(650,450,400,20,"darkred");

  //Bottom Row
  box1 = new Box(650,350,30,40,"lightblue");
  box2 = new Box(680,350,30,40,"lightblue");
  box3 = new Box(710,350,30,40,"lightblue");
  box4 = new Box(740,350,30,40,"lightblue");
  box5 = new Box(770,350,30,40,"lightblue");
  box6 = new Box(800,350,30,40,"lightblue");
  box7 = new Box(620,350,30,40,"lightblue");
  box8 = new Box(590,350,30,40,"lightblue");
  box9 = new Box(560,350,30,40,"lightblue");
  box10 = new Box(530,350,30,40,"lightblue");
  box11 = new Box(500,350,30,40,"lightblue");

  // 2nd to Bottom
  box12 = new Box(665,300,30,40,"lightpink");
  box13 = new Box(695,300,30,40,"lightpink");
  box14 = new Box(725,300,30,40,"lightpink");
  box15 = new Box(755,300,30,40,"lightpink");
  box16 = new Box(785,300,30,40,"lightpink");
  box17 = new Box(635,300,30,40,"lightpink");
  box18 = new Box(605,300,30,40,"lightpink");
  box19 = new Box(575,300,30,40,"lightpink");
  box20 = new Box(545,300,30,40,"lightpink");
  box21 = new Box(515,300,30,40,"lightpink");

  //3rd to Bottom
  box22 = new Box(770,250,30,40,"lightgreen");
  box23 = new Box(740,250,30,40,"lightgreen");
  box24 = new Box(710,250,30,40,"lightgreen");
  box25 = new Box(680,250,30,40,"lightgreen");
  box26 = new Box(650,250,30,40,"lightgreen");
  box27 = new Box(620,250,30,40,"lightgreen");
  box28 = new Box(590,250,30,40,"lightgreen");
  box29 = new Box(560,250,30,40,"lightgreen");
  box30 = new Box(530,250,30,40,"lightgreen");

  //4th to Bottom
  box31 = new Box(665,200,30,40,"lightblue");
  box32 = new Box(695,200,30,40,"lightblue");
  box33 = new Box(725,200,30,40,"lightblue");
  box34 = new Box(755,200,30,40,"lightblue");
  box35 = new Box(635,200,30,40,"lightblue");
  box36 = new Box(605,200,30,40,"lightblue");
  box37 = new Box(575,200,30,40,"lightblue");
  box38 = new Box(545,200,30,40,"lightblue");

  //5th to Bottom
  box39 = new Box(740,150,30,40,"lightpink");
  box40 = new Box(710,150,30,40,"lightpink");
  box41 = new Box(680,150,30,40,"lightpink");
  box42 = new Box(650,150,30,40,"lightpink");
  box43 = new Box(620,150,30,40,"lightpink");
  box44 = new Box(590,150,30,40,"lightpink");
  box45 = new Box(560,150,30,40,"lightpink");

  //Middle
  box46 = new Box(665,100,30,40,"lightgreen");
  box47 = new Box(695,100,30,40,"lightgreen");
  box48 = new Box(725,100,30,40,"lightgreen");
  box49 = new Box(635,100,30,40,"lightgreen");
  box50 = new Box(605,100,30,40,"lightgreen");
  box51 = new Box(575,100,30,40,"lightgreen");

  //5th to Top
  box52 = new Box(710,50,30,40,"lightblue");
  box53 = new Box(680,50,30,40,"lightblue");
  box54 = new Box(650,50,30,40,"lightblue");
  box55 = new Box(620,50,30,40,"lightblue");
  box56 = new Box(590,50,30,40,"lightblue");

  //4th to Top
  box57 = new Box(695,0,30,40,"lightpink");
  box58 = new Box(665,0,30,40,"lightpink");
  box59 = new Box(635,0,30,40,"lightpink");
  box60 = new Box(605,0,30,40,"lightpink");

  //3rd to Top
  box61 = new Box(650,-50,30,40,"lightgreen");
  box62 = new Box(680,-50,30,40,"lightgreen");
  box63 = new Box(620,-50,30,40,"lightgreen");

  //2nd to Top
  box64 = new Box(665,-100,30,40,"lightblue");
  box65 = new Box(635,-100,30,40,"lightblue");

  //Top Row
  box66 = new Box(650,-150,30,40,"lightpink");

  //Stand 2
  stand2 = new Ground(1400,600,250,20,"darkred");

  // Bottom Row
  Box1 = new Box(1400,550,30,40,"lightblue");
  Box2 = new Box(1430,550,30,40,"lightblue");
  Box3 = new Box(1460,550,30,40,"lightblue");
  Box4 = new Box(1370,550,30,40,"lightblue");
  Box5 = new Box(1340,550,30,40,"lightblue");
  Box6 = new Box(1490,550,30,40,"lightblue");
  Box7 = new Box(1310,550,30,40,"lightblue");

  //2nd to Bottom
  Box8 = new Box(1415,500,30,40,"lightpink");
  Box9 = new Box(1445,500,30,40,"lightpink");
  Box10 = new Box(1475,500,30,40,"lightpink");
  Box11 = new Box(1385,500,30,40,"lightpink");
  Box12 = new Box(1355,500,30,40,"lightpink");
  Box13 = new Box(1325,500,30,40,"lightpink");

  //3rd to Bottom
  Box14 = new Box(1400,450,30,40,"lightgreen");
  Box15 = new Box(1430,450,30,40,"lightgreen");
  Box16 = new Box(1460,450,30,40,"lightgreen");
  Box17 = new Box(1370,450,30,40,"lightgreen");
  Box18 = new Box(1340,450,30,40,"lightgreen");

  //Middle
  Box19 = new Box(1415,400,30,40,"lightblue");
  Box20 = new Box(1445,400,30,40,"lightblue");
  Box21 = new Box(1385,400,30,40,"lightblue");
  Box22 = new Box(1355,400,30,40,"lightblue");

  //3rd to Top
  Box23 = new Box(1400,350,30,40,"lightpink");
  Box24 = new Box(1430,350,30,40,"lightpink");
  Box25 = new Box(1370,350,30,40,"lightpink");

  //2nd to Top
  Box26 = new Box(1415,300,30,40,"lightgreen");
  Box27 = new Box(1385,300,30,40,"lightgreen");

  //Top
  Box28 = new Box(1400,250,30,40,"lightblue");

  polygon = new Polygon(200,300,80);

  chain = new SlingShot(polygon.body, {x:250,y:300}, "white");

  Engine.run(engine);
}

function draw() {
  background(0);  
  drawSprites();

  ground.display();
  
  stand.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display(); 
  
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();

  box39.display();
  box40.display();
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();

  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();
  box51.display();

  box52.display();
  box53.display();
  box54.display();
  box55.display();
  box56.display();

  box57.display();
  box58.display();
  box59.display();
  box60.display();

  box61.display();
  box62.display();
  box63.display();

  box64.display();
  box65.display();

  box66.display();

  stand2.display();

  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();

  Box8.display();
  Box9.display();
  Box10.display();
  Box11.display();
  Box12.display();
  Box13.display();

  Box14.display();
  Box15.display();
  Box16.display();
  Box17.display();
  Box18.display();

  Box19.display();
  Box20.display();
  Box21.display();
  Box22.display();

  Box23.display();
  Box24.display();
  Box25.display();

  Box26.display();
  Box27.display();

  Box28.display();

  polygon.display();

  chain.display();

  console.log(Box1.body.speed);

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain.fly();
}

function drawBack(){
  if(keyCode === 32){
    chain.attach(polygon.body);
  }
}