class Bob{
    constructor(x,y){
var options={
isStatic:false,
restitution:0.5,
friction:0.5,
density:1.2
}

this.body=Bodies.circle(130,600,15,options)
World.add(world,this.body)

    }

display(){
ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,15,15)
}}