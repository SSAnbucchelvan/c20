var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(200, 200, 50, 50);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="blue";
  movingRect.velocityX=-2;
  fixedRect.velocityX=2;
}

function draw() {
  background("lightgreen"); 
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2  &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2  &&
      fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
    
    movingRect.velocityX=2;
    fixedRect.velocityX=-2;
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="blue";
  }
 // if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2  &&
      fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
        movingRect.shapeColor="red";
        fixedRect.shapeColor="red";
        
        movingRect.velocityY=2;
        fixedRect.velocityY=-2;
      }

  drawSprites();
   
   
}