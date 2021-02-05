var canvas;
var music;
var box1,box2,box3,box4
var square
var edge1,edge2,edge3


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(100,600,200,50)
    box1.shapeColor = "blue"
    box2 = createSprite(300,600,200,50)
    box2.shapeColor = "green"
    box3 = createSprite(500,600,200,50)
    box3.shapeColor = "yellow"
    box4 = createSprite(700,600,200,50)
    box4.shapeColor = "purple"

    square = createSprite(random(20,750))
    square.shapeColor = "grey"
    square.velocityX=-5
    square.velocityY=5 
   

    edge1=createSprite(0,600,10,1500)
    edge1.shapeColor = "grey"
    edge2=createSprite(800,600,10,1500)
    edge2.shapeColor = "grey"
    edge3=createSprite(0,0,1700,15)
    edge3.shapeColor = "grey"


}

function draw() {
    background(rgb(169,169,169));
    
    
    if(box1.isTouching(square)&& square.bounceOff(box1)){
        square.shapeColor = "blue"

    }

    if(box2.isTouching(square)&& square.bounceOff(box2)){
        square.shapeColor = "green"

    }

    if(box3.isTouching(square)&& square.bounceOff(box3)){
        square.velocityX=0
        square.velocityY=0
        

    }
    if(box4.isTouching(square)&& square.bounceOff(box4)){
        square.shapeColor = "purple"

    }

    if(edge1.isTouching(square)&& square.bounceOff(edge1)){
        
    }

    if(edge2.isTouching(square)&& square.bounceOff(edge2)){
        
    }

    if(edge3.isTouching(square)&& square.bounceOff(edge3)){
        
    }
    
    

    
drawSprites();
// bounceOff();
// isTouching();

}

