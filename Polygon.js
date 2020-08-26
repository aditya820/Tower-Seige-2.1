class Polygon{
    constructor(x,y,diameter){
        var options_polygon = {
            isStatic : false,
            restitution : 0.8
        }

        this.body = Bodies.circle(x,y,20,options_polygon);
        //this.size = diameter/2;

        World.add(world, this.body);
    }

    display(){
        var posP = this.body.position;
        fill("red");
        ellipseMode(RADIUS);
        ellipse(posP.x, posP.y,20,20);
    }

}