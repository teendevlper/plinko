class Particle{
    constructor(x,y,radius){
        var options={
            isStatic : false,
            restitution : 0.5,
            friction : 0.6,
            density : 1.2
            
        }
     this.body = Bodies.circle(x,y,radius, options);
     this.radius = radius;
     this.color = color(random(0,255), random(0,255), random(0,255));
  
     World.add(world, this.body);
    }
display(){
 
 var pos = this.body.position;
 fill(this.color);
 ellipseMode(RADIUS);
 circle(pos.x,pos.y,this.radius);

}
}
