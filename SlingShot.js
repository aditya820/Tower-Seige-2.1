class SlingShot{
    constructor(bodyA, PointB, color){
        var options = {
            bodyA: bodyA,
            pointB: PointB,
            stiffness: 0.004,
            length: 7
        }

        this.pointB = PointB
        this.bodyA = bodyA;
        this.color = color;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    attach(Body){
        this.chain.bodyA = Body;
    }

    fly(){
      this.chain.bodyA = null;
    }
    
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke(this.color);
        var rope = line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}