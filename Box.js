class Box{
    constructor(x, y, width, height){

    this.width = width
    this.height = height
    var options = {
        isStatic:false
    }
    this.body = Bodies.rectangle(x, y, width, height, options)
    World.add(world, this.body)
}

    display(){
        var posA = this.body.position
        var angle = this.body.angle
        push()
        translate(posA.x, posA.y)
        rotate(angle)
        fill("yellow")
        rectMode(CENTER)
        rect(0, 0, this.width, this.height)
        pop()
    }
}