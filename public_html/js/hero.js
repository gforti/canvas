
function Hero(game) {
	
    this.x = 0;
    this.y = 0;

    this.row = 0;
    this.col = 0;
	
    this.move = function() {

        if (game.keys.UP in game.keys.pressed) { // Player holding up
                this.y -= tileSize;
        }
        if (game.keys.DOWN in game.keys.pressed) { // Player holding down
                this.y += tileSize;
        }
        if (game.keys.LEFT in game.keys.pressed) { // Player holding left
                this.x -= tileSize;
        }
        if (game.keys.RIGHT in game.keys.pressed) { // Player holding right
                this.x += tileSize;
        }

        return this;
    };
	
    this.moveBack = function() {

        if (game.keys.UP in game.keys.pressed) { // Player holding up
                this.y += tileSize;
        }
        if (game.keys.DOWN in game.keys.pressed) { // Player holding down
                this.y -= tileSize;
        }
        if (game.keys.LEFT in game.keys.pressed) { // Player holding left
                this.x += tileSize;
        }
        if (game.keys.RIGHT in game.keys.pressed) { // Player holding right
                this.x -= tileSize;
        }

        return this;
    };
	
	
    this.collide = function() {
        var startX = Math.floor(this.x % rowTileCount) *tileSize;
        var startY = Math.floor(this.y / colTileCount) *tileSize;


        this.col = Math.floor(this.x / tileSize);
        this.row = Math.floor(this.y / tileSize);

        var undfind;
        var tile = currentTile[ this.row ][ this.col ];
        var tileType = 'floor';


        if( null !== tile && undfind !== tile && tileData['img_'+tile] ) {
                tileType = tileData['img_'+tile].type;
        }
        console.log(tileType);
        if ( tileType === 'wall' )  {       
                this.moveBack();			

        } 
        
      
		
        	
		return this;
	};
        
    this.draw = function() {
        game.canvasCTXCopy.drawImage(playerImg, 0, 0, tileSize, tileSize, this.x, this.y, tileSize, tileSize);
	
    };
	
}

