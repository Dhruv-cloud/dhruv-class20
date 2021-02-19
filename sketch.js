var fixedrect,movingrect;

function setup() {

  createCanvas(1000,1000);
  fixedrect = createSprite(500,500,100,200);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(300,350,100,200);
  movingrect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
 movingrect.x = World.mouseX;
 movingrect.y = World.mouseY;
 console.log(fixedrect.x - movingrect.x)

 if (movingrect.x-fixedrect.x < fixedrect.width/2 + movingrect.width/2
   && fixedrect.x - movingrect.x <fixedrect.width/2 + movingrect.width/2
    && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2
     && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2) {
  movingrect.shapeColor = "red";
  fixedrect.shapeColor = "red";
 }

 else {
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
 }
  drawSprites();
}