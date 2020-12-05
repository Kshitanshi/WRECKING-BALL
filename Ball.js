class Ball{
    constructor(x, y, radius){

    this.radius = radius
    var options = {
        isStatic:false
    }
    this.body = Bodies.circle(x, y, radius, options)
    World.add(world, this.body)
}

    display(){
        var posA = this.body.position
        var angle = this.body.angle
        push()
        translate(posA.x, posA.y)
        rotate(angle)
        fill("red")
        
        circle(0, 0, this.radius*2)
        pop()
    }
}