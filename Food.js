class Food{
    constructor(){
        this.foodStock
        this.lastFed
        this.foodObj
        this.image=loadImage("images/Milk.png")
        
    }

display(){
 var x=80,y=100;

 imageMode(CENTER)
 image(Food,720,220,70,70);

 if(this.foodStock!=0){
   for(var i=0;i<this.foodStock;i++){
     if(i%10==0){
       x=80;
       y=y+50;
     }
     image(Food,x,y,50,50);
     x=x+30;
    }
 }




getFood(){
   
}

 updateFoodStock(){

}
 deductFood(){

 }

}