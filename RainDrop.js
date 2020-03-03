class RainDrop{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'gravity' :2
        }
        this.body = Bodies.rect(x,y,05,20,options);
        this.width = 05;
        this.height = 20;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(this.body.position.x,this.body.position.y,this.body.width, this.body);
        rectMode(CENTER)
        rect(pos.x,pos.y,05,20);
        pop();    
    }
}