class Dustbin{
   constructor(x,y,width,height){
      var options = {
         isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage('dustbingreen.png');
      this.w = width;
      this.h = height;
      World.add(world,this.body);


   }

   display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.w, this.h);
    pop();

   }

}