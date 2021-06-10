var garden;
var tom1,tom2,tom3;
var jerry1,jerry2,jerry3;

function preload() {
    //load the images here
    garden=loadImage("images/garden.png");
    jerry1=loadAnimation("images/mouse1.png");
    jerry2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3=loadAnimation("images/mouse4.png");

    tom1=loadAnimation("images/cat1.png");
    tom2=loadAnimation("images/cat2.png","images/cat3.png");
    tom3=loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600,10,10);
    jerry=createSprite(200,600,10,10);

    jerry.addAnimation("jerryStanding",jerry1);
    tom.addAnimation("tomSleeping",tom1);
    tom.scale=0.2;
    jerry.scale=0.15;

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<tom.width/2-jerry.width/2){
        tom.velocityX=0;
        tom.addAnimation("tomLastImage",tom3);
        tom.scale=0.2;
        tom.x=300;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage",jerry3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");




    }              



    



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
        tom.velocityX=-5;
        tom.addAnimation("tomcatching",tom2);
        tom.changeAnimation("tomcatching");
        jerry.addAnimation("jerryRunning",jerry2);
        jerry.changeAnimation("jerryRunning");
        jerry.frameDelay=13;

    }

}
