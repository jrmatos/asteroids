import PlayerSprite from 'objects/PlayerSprite';

class GameState extends Phaser.State {
	constructor() {
		super();
		this.imageName = 'player';
	}
	
	preload() {
		this.game.load.image(this.imageName, 'img/player.png');
	}

	create() {
		// physics system
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// player
		this.player = new PlayerSprite(this.game,
									   this.game.world.centerX,
									   this.game.world.centerY + 200,
									   this.imageName);

		// inputs
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.fireButton.onDown.add(this.player.mFire, this);
		
	}

	update() {
		this.handleInputs();
	}

	handleInputs() {
		if(this.cursors.left.isDown) {
			this.player.mMoveLeft();
		}
		else if(this.cursors.right.isDown) {
			this.player.mMoveRight();
		}
		else {
			this.player.mStop()			
		}
	}

}

export default GameState;
