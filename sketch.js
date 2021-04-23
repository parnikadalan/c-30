const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bg;

function preload(){
    bg = loadImage("sprites/bg.png")
}

function setup(){


    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350)
    bird1 = new Bird(50,50)
    log1 = new Log(810,260,300,PI/2)

    box3 = new Box(700,240,70,70)
    box4 = new Box(920,240,70,70)
    pig2 = new Pig(810,240)
    log2 = new Log(810,180, 300, PI/2)
    platform = new Ground(100,300,300,165)
    ground = new Ground(600,390,1200,20);

    box5 = new Box (810,160,70,70)
    log3 = new Log(760,120,150,PI/7)
    log4 = new Log(870,120,150,-PI/7)

    
    
    sling = new Slingshot(bird1.body, {x:200, y:50})
}

function draw(){
    background(bg);
    Engine.update(engine);
    box1.display();
    box2.display()
    pig1.display()
    bird1.display()
    log1.display()
    ground.display()
    
    box3.display()
    box4.display()
    pig2.display()
    log2.display()

    box5.display()
    log3.display()
    log4.display()
    sling.display()
    platform.display()
    

}

function mouseDragged(){
    Matter.Body.setPosition(bird1.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    sling.fly()
}

function keyPressed(){
    if(keyCode===32){
        sling.reattach(bird1.body)
    }
}