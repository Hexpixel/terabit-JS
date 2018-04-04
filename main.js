/*
terabit ported to JS
Code done by Terapixel
PLEASE READ: I don't know what I'm doing
*/

<script src="//cdn.jsdelivr.net/npm/phaser@3.3.0/dist/phaser.js"></script>



// Colors
var colors = {
    white: [255, 255, 255],
    red: [255, 0, 0],
    green: [63, 163, 47],
    blue: [131, 177, 255]
};

// Game configuration
var configuration = {
    // game renderer type
    type: Phaser.AUTO,
    // Game world dimensions
    screen_width: 800,
    screen_height: 640,
    world_physics: {
        default: 'arcade',
        arcade: {
            gravity: { y : 300 },
            debug: false
        }
    },
    // Increase this value to make the terrain less "pointy".
    noise_frequency: 20, // need to import JS noise library...
    // default game scene
    game_map: {
        preload: preload,
        create: create,
        update: update
    }
};


// Takes the game configuration and initiates the game
var game = new Phaser.Game(configuration);

function preload() {
    this.load.image('sky', 'src/games/firstgame/assets/sky.png');
    this.load.image('ground', 'src/games/firstgame/assets/platform.png');
    this.load.image('star', 'src/games/firstgame/assets/star.png');
    this.load.image('bomb', 'src/games/firstgame/assets/bomb.png');
    this.load.spritesheet('dude', 
        'src/games/firstgame/assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

var platforms;

function create() {
    this.add.image(400, 300, 'sky');
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
}

function update() {
}
