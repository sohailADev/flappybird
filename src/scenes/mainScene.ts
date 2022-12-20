import {Application,Container,Sprite} from 'pixi.js';

export class MainScene extends Container{
    app:Application;
    sprite:Sprite;
    state:{velocity:{x:number,y:number}};
    constructor(app:Application){
        super();
        this.app = app;
        this.state = {velocity:{x:1,y:2}};
        this.update = this.update.bind(this);
    }
    update(_:any,delta:number)
    {
        if(this.sprite.x <= 0 || this.sprite.x >= window.innerWidth - this.sprite.width)
        {
            this.state.velocity.x = this.state.velocity.x;
        }
    }

}