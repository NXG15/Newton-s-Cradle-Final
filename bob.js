class bob {
    constructor(x,y){
        var options= {
            isStatic: false,
            restitution: 1.2,
            friction: 0.2,
            density:4
        }

        this.body = Bodies.circle(x,y,30,options);
        this.radius = 60;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill('aquamarine');
        ellipse(pos.x,pos.y,this.radius,this.radius);

    }
}