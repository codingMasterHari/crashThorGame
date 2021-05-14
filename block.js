class Block{
    constructor(x, y, width, height) {
        var options = {
                
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("thanos.png");
        this.visibility = 255;
        this.volume = 0.5
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        if(this.body.speed < 6) {
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          // rect(0,0,this.width, this.height);
          imageMode(CENTER);
          image(this.image, 0,0,this.width*1.1, this.height*0.8);
          pop();
        } else if(this.body.speed > 6 && this.body.position.x < 901 && this.body.position.y < 401){
          World.remove(world, this.body);
          punchSound.volume = this.volume+0.001;
          push();
          punchSound.play();
          this.visibility-=15;
          tint(255, this.visibility);
          image(this.image, this.body.position.x, this.body.position.y, 40, 65);
          pop();
          this.volume=0;
          // punchSound.pause();
        }
      }
}
