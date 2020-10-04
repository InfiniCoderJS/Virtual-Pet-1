//Create variables here
var dog, happyDog, database, foodS, foodStock
var dogImageHappy, dogImage, test


function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png")
  dogImageHappy = loadImage("dogImg1.png")
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
}

function setup() {
  createCanvas(500, 500);
  background(46, 139, 87)

  dog = createSprite(250,250,20,20)
  
}


function draw() {  
  
  dog.addImage(dogImage)
  dog.scale = 0.5

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImageHappy)
  }

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
  Food:x 
})
}
