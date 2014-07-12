
function Enemy(o){
	
	this.tileSize = 1;
	this.col = 0; //x
	this.row = 0; //y
	this.health = 100;
        this.alive = true;
        this.level = 1;
        this.img = new Image();
        
        this.directions = [1,2,3,4];
        this.direction = 1;
        this.maxTick = 10;
        this.tick = 1;
        
        this.maxTickMove = 10;
        this.tickMove = 1;
        
        this.pause = false;
	
        this.param(o);
}



Enemy.prototype.param = function (o) {
	
	if ( o ) {
            if (o.hasOwnProperty('tileSize') ) {
                this.tileSize = o.tileSize;
            }
            if (o.hasOwnProperty('col') ) {
                this.col = o.col * this.tileSize;
            }
            if (o.hasOwnProperty('row') ) {
                this.row = o.row * this.tileSize;
            }
            if (o.hasOwnProperty('health') ) {
                this.health = o.health;
            }
            if (o.hasOwnProperty('alive') ) {
                this.alive = o.alive;
            }
            if (o.hasOwnProperty('level') ) {
                this.level = o.level;
            }
            if (o.hasOwnProperty('img') ) {
                this.img.src = o.img;
            }
	}
	
};


Enemy.prototype.collisionCanvasRight = function (canvas) {
	
	return ( this.col >= canvas.width ? true : false);
};

Enemy.prototype.collisionCanvasLeft = function () {
	
	return ( this.col < 0 ? true : false);
};

Enemy.prototype.collisionCanvasTop = function () {
	
	return ( this.row < 0 ? true : false);
};

Enemy.prototype.collisionCanvasBottom = function (canvas) {
	
	return ( this.row >= canvas.height ? true : false);
};


Enemy.prototype.collisionCanvas = function (canvas) {
	
	if ( this.collisionCanvasRight(canvas) || this.collisionCanvasLeft(canvas) 
            || this.collisionCanvasTop(canvas) || this.collisionCanvasBottom(canvas) ) {
            return true;
        }

	return false;
};


Enemy.prototype.collisionFix = function () {
	
	if ( this.direction === 1 ) { // Player holding up
                this.row += this.tileSize;
        }
        if ( this.direction === 2 ) { // Player holding down
                this.row -= this.tileSize;
        }
        if ( this.direction === 3 ) { // Player holding left
                this.col += this.tileSize;
        }
        if ( this.direction === 4 ) { // Player holding right
                this.col -= this.tileSize;
        }

        return this;
};


Enemy.prototype.move = function () {
    this.ticker();
        
    if ( this.tick === 0 ) {
        this.direction = this.directions[Math.floor(Math.random() * this.directions.length)];
        this.pause = !this.pause;
    }
	
	
      if ( this.tickMove === 0 && !this.pause ) {
          
        if ( this.direction === 1 ) { // Player holding up
                this.row -= this.tileSize;
        }
        if ( this.direction === 2 ) { // Player holding down
                this.row += this.tileSize;
        }
        if ( this.direction === 3 ) { // Player holding left
                this.col -= this.tileSize;
        }
        if ( this.direction === 4 ) { // Player holding right
                this.col += this.tileSize;
        } 
        
      }   
    
    return this;
};

Enemy.prototype.ticker = function() {
    this.tick = (this.tick + 1) % this.maxTick;
    this.tickMove = (this.tickMove + 1) % this.maxTickMove;
    
    if ( this.tick === 0 ) {
        var min = 10, max = 100;
        this.maxTick = Math.floor(Math.random()*(max-min+1)+min);
        max = 20;
        this.maxTickMove = ~~(Math.random()*(max-min+1)+min);
    }
};



Enemy.prototype.cords = function () {	
	return {"row" : ~~( this.row /this.tileSize ), "col" : ~~( this.col /this.tileSize ) };
};


Enemy.prototype.setCords = function(x,y) {
    this.param({"row":y,"col":x});	
};


Enemy.prototype.draw = function (canvasCTX) {
    canvasCTX.drawImage(this.img, 0, 0, this.tileSize, this.tileSize, this.col, this.row, this.tileSize, this.tileSize);	
    return this;
};