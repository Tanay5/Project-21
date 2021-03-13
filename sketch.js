var canvas;
var music;
var popSound;

function preload(){
    musicSound = loadSound("music.mp3");
    popSound = loadSound("pop.mp3");
   
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100, 570, 190, 30)
    surface1.shapeColor = "blue"
    surface2 = createSprite(300, 570, 190, 30)
    surface2.shapeColor = "orange"
    surface3 = createSprite(500, 570, 190, 30)
    surface3.shapeColor = "purple"
    surface4 = createSprite(700, 570, 190, 30)
    surface4.shapeColor = "green"


    //create box sprite and give velocity
    box = createSprite(random(20,750), 450, 50, 50)
    box.shapeColor = "white"
    box.velocityX = 8
    box.velocityY = 10

    
}

function draw() {
    background(rgb(169,169,169));  
    musicSound.play()

    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
    

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor = "blue"
       popSound.play();
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)) {
        box.shapeColor = "orange"
        popSound.play()
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)) {
        box.shapeColor = "purple"
       popSound.play();
        box.velocityX = 0
        box.velocityY = 0
        musicSound.stop();
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor = "green"
        popSound.play()
    }

    drawSprites();
}
