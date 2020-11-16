class Dustbin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width
      this.height = height
      World.add (world,this.body)
      this.image = loadImage("dustbingreen.png");
   }
   display(){
       rectMode(CENTER)
     fill("red")
     stroke("white")
    rect(0,0,this.width,this.height)
   }
} 