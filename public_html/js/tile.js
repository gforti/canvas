/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Tile(o,cb) {
    
    this.img = new Image();
    this.size = 1;
    this.rows = 0;
    this.cols = 0;
    this.param(o,cb);
    
}


Tile.prototype.param = function (o,cb) {
	
    if ( o ) {
        if (o.hasOwnProperty('size') ) {
            this.size = o.size;
        }
        if (o.hasOwnProperty('img') ) {
            this.img.src = o.img;
            var that = this;
            this.img.addEventListener('load',function() {
                that.rows = Math.floor(that.img.height/that.size);
                that.cols = Math.floor(that.img.width/that.size);
                if( typeof cb === 'function') cb();
                /* either an even should fire that it has been loaded
                 * or a callback can be used to draw then this is complete                 * 
                 */
            },false); 
        }
    }
	
};