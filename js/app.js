
var score=0, scoreCall=0;


// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.sprite = 'images/enemy-bug.png';
};
// Constructor
  class Player {
    constructor(x,y) {
    this.x=x;
    this.y=y;
    this.sprite = 'images/char-boy.png';
  };
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
      this.x=this.x+this.speed*dt;
      if (this.x==0) {
        this.speed=130+Math.floor(Math.random()*100);
      }
    if (this.x>505) {
      this.x=0;
      this.speed=130+Math.floor(Math.random()*100);
    }
    if(player.x<this.x+70 && player.x+65>this.x && player.y<this.y+60 && player.y+60>this.y) {
      player.x=200;
      player.y=407;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Draw the player on the screen, required method for game
Player.prototype.render=function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class

// This class requires an update(), render() and
// a handleInput() method.

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies=[];

var enemies=[60,145,225];
for (var i in enemies) {
  enemyPlayer=new Enemy(0,enemies[i],147);
  allEnemies.push(enemyPlayer);
}

var player=new Player(200,407);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
Player.prototype.handleInput=function(key){
  // switch Case for keys
  switch (key) {
    case 'left':
      this.x=this.x-101;
      if (this.x<0) {
        this.x=0;
      }
      break;
      case 'right':
        this.x=this.x+101;
        if (this.x>400) {
          this.x=400;
        }
        break;
        case 'up':
          this.y=this.y-83;
          if (this.y<0) {
            this.y=-8;
          }
          break;
          case 'down':
            this.y=this.y+83;
            if (this.y>400) {
              this.y=400;
            }
            break;
    default: "exit";

  }
  if (this.y<60) {
    scoreCall=setTimeout(()=>{
      this.x=200;
      this.y=407;
    }, 200);
  }
}

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
