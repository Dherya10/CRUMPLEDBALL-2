class dustbin{
    constructor(x,y,width,height){
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width
    this.height=height


    World.add(world,this.body)
    }
   
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("red");
        rotate(this.angle)
        pop()
       

    }
    


}