class Slingshot{
    constructor(body1, pointB){
        var options={
            bodyA: body1,
            pointB: pointB,
            stiffness: 0.2,
            length: 50
        }

        this.sling = Matter.Constraint.create(options)
        this.pointB = pointB 
        World.add(world, this.sling)

    }

    fly(){
        this.sling.bodyA = null
    
    }
    
    display(){

        
        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position
        
        strokeWeight(4)
        stroke("white")
        line(pointA.x ,pointA.y, this.pointB.x, this.pointB.y)
    }
    }
}