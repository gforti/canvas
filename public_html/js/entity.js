
function Entity(o){
	
	this.tileSize = 1;
	this.col = 0; //x
	this.row = 0; //y
	this.health = 100;
        this.type = 'FLOOR';
        this.img = new Image();
	
        this.param(o);
}



Entity.prototype.param = function (o) {
	
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
            if (o.hasOwnProperty('type') ) {
                this.type = o.type;
            }
            if (o.hasOwnProperty('img') ) {
                this.img.src = o.img;
            }
	}
	
};


Entity.prototype.collisionCanvasRight = function (canvas) {
	
	return ( this.col >= canvas.width ? true : false);
};

Entity.prototype.collisionCanvasLeft = function () {
	
	return ( this.col < 0 ? true : false);
};

Entity.prototype.collisionCanvasTop = function () {
	
	return ( this.row < 0 ? true : false);
};

Entity.prototype.collisionCanvasBottom = function (canvas) {
	
	return ( this.row >= canvas.height ? true : false);
};


Entity.prototype.collisionCanvas = function (canvas) {
	
	if ( this.collisionCanvasRight(canvas) || this.collisionCanvasLeft(canvas) 
            || this.collisionCanvasTop(canvas) || this.collisionCanvasBottom(canvas) ) {
            return true;
        }

	return false;
};


Entity.prototype.collisionEntityFix = function (input) {
	
	if ( input.pressed(input.KEYS.UP) ) { // Player holding up
                this.row += this.tileSize;
        }
        if (  input.pressed(input.KEYS.DOWN) ) { // Player holding down
                this.row -= this.tileSize;
        }
        if (  input.pressed(input.KEYS.LEFT) ) { // Player holding left
                this.col += this.tileSize;
        }
        if (  input.pressed(input.KEYS.RIGHT) ) { // Player holding right
                this.col -= this.tileSize;
        }

        return this;
};


Entity.prototype.move = function (input) {
	
	if ( input.pressed(input.KEYS.UP) ) { // Player holding up
                this.row -= this.tileSize;
        }
        if ( input.pressed(input.KEYS.DOWN) ) { // Player holding down
                this.row += this.tileSize;
        }
        if ( input.pressed(input.KEYS.LEFT) ) { // Player holding left
                this.col -= this.tileSize;
        }
        if ( input.pressed(input.KEYS.RIGHT) ) { // Player holding right
                this.col += this.tileSize;
        }

        return this;
};



Entity.prototype.cords = function () {	
	return {"row" : ~~( this.row /this.tileSize ), "col" : ~~( this.col /this.tileSize ) };
};


Entity.prototype.setCords = function(x,y) {
    this.param({"row":y,"col":x});	
};


Entity.prototype.draw = function (canvasCTX) {
    canvasCTX.drawImage(this.img, 0, 0, this.tileSize, this.tileSize, this.col, this.row, this.tileSize, this.tileSize);	
    return this;
};