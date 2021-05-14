class WreakingBall {
	constructor(x,y,r) {
		var options={
			isStatic:false,
			restitution:0.5,
			friction:1,
			density:1000
		}
		this.x = x;
		this.y = y;
		this.r = r
		this.image = loadImage("thor.png");
		this.body = Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display() {
        var polygonPos = this.body.position;		
        push();
        translate(polygonPos.x, polygonPos.y);
        fill(255,0,255);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image, 0,0,this.r*1, this.r*1.333333);
        pop();	
	}
}