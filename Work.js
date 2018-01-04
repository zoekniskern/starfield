
var Stars = new Array();
var howMany = 65;

function setup(){
    createCanvas(windowWidth,windowHeight);
    colorMode(HSB,255);
    
    for(var i = 0;i<howMany; i++){
        Stars[i] = new Star();
    }
}

function draw(){
    background(61);
    
    for(var i = 0;i<howMany; i++){
        Stars[i].twinkle();
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}