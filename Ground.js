class Ground{
    constructor(x, y, width, height){
        this.width = width
        this.height = height
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body)
    }
    display(){
        var posA = this.body.position
        rectMode(CENTER)
        rect(posA.x, posA.y, this.width, this.height)
    }
}