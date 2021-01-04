class Paper {
  constructor() {
    var options = {
        isStatic: false,
        restitution:0.3,
        friction:0.5,
        density:1.5

    }
    this.body = Bodies.circle(500,300,25,options);
    this.width = 20;
    this.height = 20;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    fill("pink");
    ellipse(pos.x, pos.y, this.width, this.height);
  }
}