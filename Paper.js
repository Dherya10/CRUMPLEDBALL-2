class paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            resitution:1,
            friction:0.3,
            density:1.17
        }

      this.x = x
      this.y = y
      this.r = r
      this.image=loadImage("paper.png");
    
      
      this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);

   

      World.add(world,this.image);
      World.add(world,this.body);
   


    }
display(){
    var pos =this.body.position;
    push()
    translate(pos.x,pos.y)
    rectMode(CENTER)
  
    fill("blue");
    rotate(this.angle);
    imageMode(CENTER);
    image(this.image,0,0, this.r ,this.r);
    pop()
   
}
}
