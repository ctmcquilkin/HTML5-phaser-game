var Menu = {

    preload: function() {
    
        // Loading images is required so that later on we can create sprites based on the them.
        // The first argument is how our image will be refered to, 
        // the second one is the path to our file.
        game.load.image('Menu', './assets/images/menu.png');
    },

    create: function () {
    
        // Add a sprite to your game, here the sprite will be the game's logo
        // Parameters are : X , Y , image name (see above) 
        // Menu screen will act as a button to start the game.
        this.add.button(0, 0, 'Menu', this.startGame, this);
    },
    
    startGame: function() {
    
    	// Change the state to the game.
    	this.state.start('Game');
    }

};