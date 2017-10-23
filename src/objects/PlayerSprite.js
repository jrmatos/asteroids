class PlayerSprite extends Phaser.Sprite {
    constructor(game, x, y, imageName) {
        super(game, x, y, imageName);

        // override attributes
        this.width = 50;
        this.height = 50;

        // custom attributes 
        this.mSpeed = 50;

        // adjust anchor
        this.anchor.set(0.5);

        // enable physics for this sprite
        this.game.physics.arcade.enable(this);
        this.body.collideWorldBounds = true;

        // add to the stage
        this.game.stage.addChild(this);        
    }

    mMoveLeft() {
        this.body.velocity.x -= this.mSpeed;
    }

    mMoveRight() {
        this.body.velocity.x += this.mSpeed;
    }

    mStop() {
        this.body.velocity.x = 0;
    }

    mFire() {
        console.log('firing...', new Date().getTime());
    }
}

export default PlayerSprite;