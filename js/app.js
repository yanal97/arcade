var Enemy = function(xCo,yCo,speed) {
    //set speed and coordinates
    this.xCo=xCo;
    this.yCo=yCo;
    this.speed=speed;


    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
    
    this.xCo += this.speed * dt;

    if(this.xCo>505){
        this.xCo=0;
        this.speed= 100 + Math.floor(Math.random()* 300);
    }

    //collision
        if( player.xCo < this.xCo + 80 &&
            player.xCo + 80 > this.xCo &&  
            player.yCo < this.yCo + 60 && 
            player.yCo + 60 > this.yCo){

        player.xCo=202;
        player.yCo=405;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.xCo, this.yCo);
};

// Now write your own player class
 var Player = function (xCo,yCo){
    this.xCo=xCo;
    this.yCo=yCo;
    this.player = 'images/char-boy.png';

 };

Player.prototype.update = function (dt) {
    if(this.yCo < 10 ){
        setTimeout(() => {
            this.xCo=202;
            this.yCo=405;
        }, 100);
    }

    if(this.yCo>405){
        this,yCo=405;
    }

    if(this.xCo > 410){
        this.xCo=402;
    }

    if(this.xCo < -10){
        this.xCo=2;
    }

};


Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.xCo, this.yCo);
};



Player.prototype.handleInput = function (pressedKey){

    if ((pressedKey == 'left' || pressedKey == 'a') && this.xCo > 0) {
        this.xCo -= 100;
    }

    
    if ((pressedKey == 'right' || pressedKey == 'd')&& this.xCo < 405) {
        this.xCo += 100;
    }

    if ((pressedKey == 'up' || pressedKey == 'w')&& this.yCo > 0) {
        this.yCo -= 80;
    }

    if ((pressedKey == 'down' || pressedKey == 's') && this.yCo < 405) {
        this.yCo += 80;
    }
}; 
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var enemyLocation = [60, 140, 230];
enemyLocation.forEach(function (locationY) {
    enemy = new Enemy(0, locationY, 300);
    allEnemies.push(enemy);
});

var player = new Player(202, 405);


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        87: 'w',
        83: 's',
        65: 'a',
        68: 'd'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


//NOTE: (i struggled in some spaces so I browsed to different sites to get help and ideas ex: (stackoverflow,github))
