function Input(cb){
    this.init(cb);
};

Input.prototype.pressedKeys = {};
Input.prototype.callBack = null;
Input.prototype.KEYS = {
    "ENTER" : 13,
    "SPACE" : 32,
    "LEFT" : 37,
    "UP" : 38,
    "RIGHT" : 39,
    "DOWN" : 40    
};

Input.prototype.setCallBack = function(cb) {
    this.callBack = cb;
};

Input.prototype.init = function(cb) {
    this.setCallBack(cb);
    var that = this;
    document.addEventListener("keydown", function (e) {
        that.pressedKeys[e.keyCode] = true;
        that.callBack();
    }, false);

    document.addEventListener("keyup", function (e) {
        delete that.pressedKeys[e.keyCode];	
    }, false);
    
};



Input.prototype.press = function(keyCode) {
    
    this.pressedKeys[keyCode] = true;
    this.callBack();
    delete this.pressedKeys[keyCode];   
    
};


Input.prototype.pressed = function(key) {
    
    switch(key) {       
      case  this.KEYS.SPACE:
      case  this.KEYS.LEFT:
      case  this.KEYS.UP:
      case  this.KEYS.RIGHT:
      case  this.KEYS.DOWN:
            break;  
      default:
          key = key.toUpperCase().charCodeAt(0);
      }
       
    return ( this.pressedKeys.hasOwnProperty(key) );
    
};

        
        
     


