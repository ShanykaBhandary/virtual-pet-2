var dog,happyDog,database,foodS,foodStock

function preload()
{
  dog1=loadImage("images/Dog.png")
  dog2=loadImage("images/dogImg1.png")
  food=loadImage("images/Milk.png")
}

  


function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(50,380)
  dog.addImage(dog1)
  dog.scale=0.2
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  function feedDog(){
    dog.addImage("images/")
  }
  
}


function draw() {  
background(46,139,87)
 fedTime=database.ref('FeedTime');
 fedTime.on("value",function(data){
   lastFed=data.val();
 });
 function feedDog(){

 }

 Food.display();
 
 drawSprites();
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM" , 350,30);
  }else if(lastFed==0){
    text("Last Feed : 12 AM",350,30);
  }else{
    text("Last Feed : "+ lastFed + " AM",350,30);
  }
  
  text("Note:PressUP_ARROW Key To Feed Drago Milk!",50,50)
  
 
}
function readStock(data){
  foodS=data.val();
} 
function updateFoodStock(x){

  if(x<=0){
   x=0;
  }else{
    x=x-1;
  }
  function addFood(){
    foodS++
    database.ref('/').update({
      Food:foodS
    })
  }
 function readFood(){
   
 }
  database.ref('/').update({
    Food:x
  })
}



