var Game_Over = {
	
	preload: function() {
		// Load the needed image for this game screen.
		game.load.image('gameover', './assets/images/gameover.png');
	},
	
	create: function() {
		
		// Create a button to restart the game.
		this.add.button(0, 0, 'gameover', this.startGame, this);
		
		// Add text with information about the score from the last game.
		game.add.text(235, 350, 'LAST SCORE', { font: 'bold 16px sans-serif', fill: '#46C0F9', align: 'center' });
		game.add.text(350, 348, score.toString(), { font: 'bold 20px sans-serif', fill: '#FFF', align: 'center' });
	},
	
	startGame: function() {
		
		// Restart the game.
		this.state.start('Game');
	}
}