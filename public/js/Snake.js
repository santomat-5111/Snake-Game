export default class Snake{
    constructor(scene){
        this.scene = scene;
        this.direction = Phaser.Math.Vector2.DOWN;
        this.body = [];
        this.body.push(
            this.scene.add.rectangle(0, 0, 16, 16, 0xff0000).setOrigin(0)
            );
        this.body.push(
            this.scene.add.rectangle(0, 0, 16, 16, 0x0000ff).setOrigin(0)
            );
        scene.input.keyboard.on('keydown', e =>{
            this.keydown(e);
        });
    }

    keydown(event){
        console.log(event);
        switch (event.keyCode) {
            case 37: //left
            this.direction = Phaser.Math.Vector2.LEFT;
            break;
            case 38: //up
            this.direction = Phaser.Math.Vector2.UP;
            break;
            case 39: //right
            this.direction = Phaser.Math.Vector2.RIGHT;
            break;
            case 40: //down
            this.direction = Phaser.Math.Vector2.DOWN;
            break;
        }
    }

    update(time){
        this.body[0].x += this.direction.x;
        this.body[0].y += this.direction.y;
    }
}