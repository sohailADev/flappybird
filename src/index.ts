import * as PIXI  from  'pixi.js';
var bunyImage = require('./imgs/fish/fish-1.png');
import fishImages from './imgs/fish';
const background = require("./imgs/background.png");
const pipe = require("./imgs/pipe.png");

const app = new PIXI.Application({});
//@ts-ignore
document.body.appendChild(app.view);
//class fish

//backgroung
let bgBack;
let bgX =1;
let bgSpeed =-1;

const frames = [];
for (let x in fishImages)
{
   
    frames.push(PIXI.Texture.from(fishImages[x]));
}  
//const bgTexture = PIXI.Assets.load(background);
const bgTexture = PIXI.Texture.from(background);
const pipeTexture = PIXI.Texture.from(pipe);

let backGround = new PIXI.TilingSprite(bgTexture,window.innerWidth,window.innerHeight);
let pipeTop = new PIXI.Sprite(pipeTexture);
let pipeBottom = new PIXI.Sprite(pipeTexture);
let pipeTop1 = new PIXI.Sprite(pipeTexture);
let pipeBottom1 = new PIXI.Sprite(pipeTexture);

backGround.position.set(0,0);

const player = new PIXI.AnimatedSprite(frames); 
player.x = app.screen.width / 4;
player.y = app.screen.height / 2;

pipeTop.x = app.screen.width+pipeTop.width;
pipeTop.y = app.screen.height/8; 
pipeTop.anchor.set(0.5);
pipeTop.scale.y *=-1.4;
pipeBottom.x = app.screen.width+pipeBottom.width;
pipeBottom.y = app.screen.height/1; 
pipeBottom.anchor.set(0.5);

pipeTop1.x = app.screen.width+pipeTop.width+400;
pipeTop1.y = 500; 
pipeTop1.anchor.set(0.5);
pipeTop1.scale.y *=1.4;
pipeBottom1.x = app.screen.width+pipeBottom.width+400;
pipeBottom1.y =-100;
pipeBottom1.scale.y *=-1.4;   
pipeBottom1.anchor.set(0.5);

player.anchor.set(0.5);
player.animationSpeed = 0.4;
player.play();
player.width=0.5;
player.height=0.5;
app.stage.interactive = true;
app.stage.hitArea = new PIXI.Rectangle(0,0,1000,1000);
app.stage.addChild(backGround);
app.stage.addChild(player);
app.stage.addChild(pipeTop);
app.stage.addChild(pipeBottom);
app.stage.addChild(pipeTop1);
app.stage.addChild(pipeBottom1);
// Animate the rotation
app.ticker.add(() => {
    //player.x + 0.1;
    bgX = (bgSpeed +bgX);
    backGround.tilePosition.x = bgX/2;
    pipeTop.x -=1;
    pipeBottom.x -=1;
    pipeTop1.x -= 1;
    pipeBottom1.x -=1;
    console.log(app.screen.height)
    if(pipeTop.x <1)
    {
        pipeTop.x = app.screen.width+pipeTop.width;
        pipeBottom.x = app.screen.width+pipeBottom.width;
    }
    if(pipeTop1.x <1)
    {
        pipeTop1.x = app.screen.width+pipeTop.width;
        pipeBottom1.x = app.screen.width+pipeBottom.width;
    }

});


