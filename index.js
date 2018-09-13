function setup() {
    createCanvas (windowWidth, windowHeight);
}

function draw() {
}

function mouseDragged() {
    line(mouseX, mouseY, pmouseX, pmouseY);
}