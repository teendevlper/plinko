class Plinko{
    constructor(x,y,radius){
        var options={
             isStatic : true,
             friction : 0.5,
             density : 1.2
        }
     this.body = Bodies.circle(x,y,radius,options);
     this.radius = radius;
     World.add(world,this.body);
    
    }

display(){
   
   push();
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill("white");
    ellipse(pos.x,pos.y,this.radius,this.radius);
   pop();
}

}