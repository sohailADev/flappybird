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
let pipeHurdle = new PIXI.TilingSprite(pipeTexture);
backGround.position.set(0,0);

const player = new PIXI.AnimatedSprite(frames); 
player.x = app.screen.width / 4;
player.y = app.screen.height / 2;
player.anchor.set(0.5);
player.animationSpeed = 0.4;
player.play();
player.width=0.5;
player.height=0.5;
app.stage.interactive = true;
app.stage.hitArea = new PIXI.Rectangle(0,0,1000,1000);
app.stage.addChild(backGround);
app.stage.addChild(player);
// Animate the rotation
app.ticker.add(() => {
    //player.x + 0.1;
    bgX = (bgSpeed +bgX);
    backGround.tilePosition.x = bgX/2;
});


