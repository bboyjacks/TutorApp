function setup() {
    createCanvas (windowWidth, windowHeight);
}

var x = 0;
var y = 0;
var x_prev = 0;
var y_prev = 0;

function draw() {
}

function mouseDragged() {
    x = mouseX;
    y = mouseY;
    line(x_prev, y_prev, x, y);
    x_prev = x;
    y_prev = y;
}