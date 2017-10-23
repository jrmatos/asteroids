class NameText extends Phaser.Text{
    constructor(game, text) {
        super(game,
              game.world.centerX,
              game.world.centerY,
              text, { font: "45px Arial", fill: "#ff0044", align: "center" });

       

        this.game.stage.addChild(this);
    }
}

export default NameText;