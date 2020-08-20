var back
var   bananaI,banana,bananaG,obstacleI,obstacleG,backA,score,playerA,monkey,rand,ground;
score=0;

function preload(){
bananaI= loadImage("banana.png");
obstacleI=loadImage("stone.png");
backA = loadImage("jungle.png");
playerA=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}
function setup() {
  createCanvas(800, 400);
  
  back=createSprite(200,200,1,1);
  back.addImage(backA);
  back.scale=2;
  back.velocityX=-4;
  
  ground=createSprite(400,400,800,20);
  ground.visible=false;
  
  monkey=createSprite(50,340,1,1);
  monkey.addAnimation("playe",playerA);
  monkey.scale=0.1;
  
  bananaG= new Group();
  obstacleG= new Group();
}
    
function draw() {  
  background("white");
  if(ground.x<0) { ground.x=ground.width/2; } 
  if(back.x<100){ back.x=back.width/2; }
  
   if(keyDown("space")){
    monkey.velocityY=-15;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if(bananaG.isTouching(monkey)){
  score=score+2;
  bananaG.destroyEach();
  }
  
switch(score){
   case 10: monkey.scale=0.12;
    break;
   case 20: monkey.scale=0.14;
   break;
   case 30: monkey.scale=0.16;
    break;
   case 40: monkey.scale=0.18;
    break;
   case 50: monkey.scale=0.20;
    break;
   case 60: monkey.scale=0.22;
    break;
   case 70: monkey.scale=0.24;
    break;
   case 80: monkey.scale=0.26;
    break;
   case 90: monkey.scale=0.28;
    break;
   case 100: monkey.scale=0.3;
    break;
    default: break; 
  }
  
  if(obstacleG.isTouching(monkey)){
  monkey.scale=0.1;
  }
  
  fruit();
  obstacle();
  drawSprites();
  stroke("black");
  textSize=20;
  fill("black");
  text("Score :"+score,500,50);
}

function fruit(){
  if(frameCount%80===0){
  var rand = Math.round(random(120,200));
  var banana = createSprite(500,200,20,20);
  banana.y=Math.round(random(390,250));
  banana.addImage(bananaI);
  banana.scale=0.05;
  banana.velocityX=-4;
  bananaG.add(banana);
  }
}
function obstacle(){
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,365,10,40);
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleI);
    obstacle.scale =0.3;
    obstacle.lifetime = 180;
    obstacleG.add(obstacle);
  }
}
