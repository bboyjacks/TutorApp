class Eraser
{
    constructor() {
    }

    stroke_eraser() {
        strokeWeight(30);
        stroke(255);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}