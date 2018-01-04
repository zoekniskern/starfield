/*Star Class
*/

function Star() {
    /*random x and y coordinates within the canvas*/
    this.xPos = Math.floor(Math.random()*windowWidth);
    this.yPos = Math.floor(Math.random()*windowHeight);
    
    /*Random Hue*/
    this.hueVal = Math.floor(Math.random()*256);
    this.saturation = Math.floor(Math.random()*100);
    //this.brightness = Math.floor(Math.random()*10 - Math.floor(Math.random()*4));
    this.brightness = Math.floor(Math.floor(random(2, random(2,12))));

    this.twinkle = function(){
        fill(this.hueVal, this.saturation, 255);
        stroke(this.hueVal, this.saturation, 255);
        ellipse(this.x, this.y, 2, 2);
        
        for(var i = 0;i<this.brightness; i++){
            var xMax = Math.round(Math.random())* 2-1;
            var yMax = Math.round(Math.random())* 2-1;
            line(this.xPos,this.yPos, this.xPos + (Math.random()*this.brightness)*xMax,this.yPos + (Math.random()*this.brightness)*yMax);
            }
        
        /*
        var outerX = this.xPos + Math.floor(Math.random()* (Math.cos(-angle*Math.PI/180) * brightness));        
        var outerY = this.yPos + Math.floor(Math.random()* (Math.sin(-angle*Math.PI/180) * brightness));
        
        var lineX = Math.floor(Math.random()*this.outerX);
        var lineY = Math.floor(Math.random()*this.outerY);
        
        line(0,0,100,100);
        stroke(60);
        
        line(this.xPos,this.yPos, this.lineX, this.lineY);
        
        for(var i=0;i<=this.brightness;i++){
            line(this.xPos,this.yPos, outerX, outerY);
            stroke(this.hueVal);
        }
        */
    }
}
