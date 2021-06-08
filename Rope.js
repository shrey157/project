class Rope {
    constructor(body1, body2) {
        var options = {
            bodyA: body1,
            bodyB: body2,
            length: 5,
            stiffness:0.8
        }
        this.rope = Matter.Constraint.create(options)
        World.add(world, this.rope)
    }
    display() {
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        strokeWeight (4);  
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}