var bgImage, bg;
var player, player_running;

function preload(){
bgImage = loadImage("images/trackbg.jpeg");
player_running = loadAnimation("images/runnerboy.png", "images/runnerboy-1.png", "images/runnerboy-3.png", "images/runnerboy-2.png");
}

function setup(){
var canvas = createCanvas(800, 400);

bg = createSprite(500,200,800,400);
bg.addImage(bgImage);
bg.scale = 2;
bg.x=bg.width/2;
bg.velocityX=-4;

player = createSprite(100, 320, 100, 100);
player.addAnimation("running",player_running);
}

function draw(){
background(0);

if(bg.x<200){
    bg.x=bg.width/2; 
  }

drawSprites();
}