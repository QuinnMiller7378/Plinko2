var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
       if (plinkos.x<500){
        score = score+1;
       }
    }

    for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
       if (plinkos.x<500){
        score = score+1;
       }
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
       if (plinkos.x<500){
        score = score+1;
       }
    }

     for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
       if (plinkos.x<500){
        score = score+1;
       }
    }

    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
  text("Score: "+score, 50, 50);
  text("100", 511, 600);
  text("100", 430, 600);
  text("100", 351, 600);
  text("200", 275, 600);
  text("200", 200, 600);
  text("300", 126, 600);
  text("500", 30, 600);
  text("200", 590, 600);
  text("300", 670, 600);
  text("500", 750, 600);
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
  
   for (var j = 0; j < particles.length; j++) {
     particles[j].display();
     score = score +1;
   }
   for (var j = 0; j < 9; j++) {
    score = score +1;
  }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
   
}