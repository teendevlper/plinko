const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var grnd, part;
var border1,border2,border3;
var particles = [];
var plinkos = [];
var divisions = [];

var width = 10;

function setup() {
  createCanvas(480,750);
  
   engine = Engine.create();
   world = engine.world;

  border1 = new Border(5,400,10,800);
  border2 = new Border(475,400,10,800);
  border3 = new Border(240,6,480,10);
    
  //div  new Divisions(200,200,10,10);




  for(var i = -10; i<=width; i= i + 50){
    plinkos.push(new Plinko(i,250,10));
  }
  for(var i = 15; i <=width-10; i=i + 50){
    plinkos.push(new Plinko(i,200,10));
  }
  for(var i = -10; i <=width; i=i + 50){
    plinkos.push(new Plinko(i,350,10));
  }
  for(var i = 15; i <=width-10; i=i + 50){
    plinkos.push(new Plinko(i,300,10));
  }

  for(var k = 10; k <=width; k = k+ 90){
    divisions.push(new Divisions(k,640,10,200));
  }

  grnd = new ground(240,740,480,10);
  

}

function draw() {
background("black");  

Engine.update(engine);

if(frameCount % 60 === 1){
for(var p = 0; p < 1; p++){
  particles.push(new Particle(random(0,480),50,10));
  }
}

for(var p = 0; p < particles.length; p++){
  particles[p].display();
}

for(var i = 0; i < plinkos.length; i++){
  plinkos[i].display();
}

for(var k= 0; k < divisions.length; k++){
  divisions[k].display();
}


grnd.display();
border1.display();
border2.display();
border3.display();

}
