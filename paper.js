class Paper {
    constructor(x,y,d){
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Matter.Bodies.circle(200,435,15,options);
    this.image = loadImage("paper.png");
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
        pop();
    }
}