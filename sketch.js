var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkeyrunning
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,time=0,jungle
var score,obstacle,ground,obstacleGroup,bananaG;

function preload(){
  
  
  monkeyrunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 jungle=loadImage("jungle.jpg")
}



function setup() {
    createCanvas(500,400);
  background=createSprite(0,0,500,400);
 background.addImage(jungle)
  monkey=createSprite(50,275)
monkey.addAnimation("monkey",monkeyrunning)
  monkey.scale=0.1
  ground=createSprite(250,300,500,10)
    obstacleGroup = createGroup();
    bananaG=createGroup();
    monkey.setCollider("circle",0,0,40)

}


function draw() {
if(background.x<0){
  background.x=background.width/2
  }
    monkey.collide(ground);

  if(gameState===PLAY){
    if(keyDown("space")&& monkey.y >= 264) {
        monkey.velocityY = -12;
    }
      time = time + Math.round(getFrameRate()/60);

   spawnObstacles()
    if(time%50===0){
      monkey.scale=monkey.scale+0.001
    }
      if(monkey.isTouching(obstacleGroup)){

    gameState=END
  }
        
  if(monkey.isTouching(bananaG)){
  time=time+2
   bananaG.destroyEach();
  }
    
    monkey.velocityY = monkey.velocityY + 0.8
  banana12(); 
  }
  ground.visible=false;
  if(gameState===END){
    monkey.velocitX=0
    banana.velocityX=0
    obstacle.velocityX=0
    monkey.lifetime=-1
    banana.lifetime=-1
    
      if(keyDown("space")){
  time=0
    obstacleGroup.destroyEach();   
    bananaG.destroyEach();
    monkey.scale=0.1
    gameState=PLAY;
  }

  }
  drawSprites();
  fill(1)
  textSize(20)
  text("survivalTime="+time,325,50)
  }
 

function spawnObstacles(){
 if (frameCount % 60 === 0){
   obstacle=createSprite(380,275)
   obstacle.addImage(obstaceImage)
   obstacle.scale=0.1
   obstacle.velocityX=-6
   obstacle.lifetime = 300;
   obstacleGroup.add(obstacle);

 }

}
function banana12(){
  if(frameCount%110===0){
  banana=createSprite(450,Math.round(random(150,200)))
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-4
  banana.lifetime=400
  bananaG.add(banana)

  }
}





