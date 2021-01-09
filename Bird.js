class Bird extends BaseClass{
  constructor(x,y){
    //transfer all the properties of the parent class constructor to the child class constructor
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    //refer to the parent/base class display function
    super.display();
  }
}