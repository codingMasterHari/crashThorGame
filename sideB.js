// class Border{
//     constructor(x, y, width, height) {
//         var options = {
                     
//         }
//         this.body = Bodies.rectangle(x, y, width, height, options);
//         this.width = width;
//         this.height = height;
//         World.add(world, this.body);
//       }
//       display(){
//         var angle = this.body.angle;
//         var pos= this.body.position;
//         push();
//         translate(pos.x, pos.y);
//         rotate(angle);
//         rectMode(CENTER);
//         rect(0,0,this.width, this.height);
//         pop();
//       }
// }

class Border {

    constructor(){
        var border_options={
            isStatic : true
          }
        
          this.border = Bodies.rectangle(895,200,20,400,border_options)
          World.add(world,this.border);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.border.position.x,this.border.position.y,20,400);
    }
}