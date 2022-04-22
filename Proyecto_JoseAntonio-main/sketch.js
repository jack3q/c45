
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var campoImage;
var balon = [],balonImage,balonJson;
var player = [],playerImage,playerJson;
var base;

function preload() {
campoImage = loadImage("image/campo.jpg");
balonImage = loadImage("image/balon.png");
playerImage = loadImage("image/player.png");
playerJson = loadJSON("image/player.json");
balonJson = loadJSON("image/balon.json");
}




function setup()
{
  createCanvas(700,600);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  };

base = Bodies.rectangle(690,590,700,10,options);
World.add(world,base);

}

function draw() 
{
  background(51);
  //image(campoImage,1000,900,1000,90)
 Engine.update(engine);
 rect(base.position.x,base.position.y,700,10);
}

