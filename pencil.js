class Pencil
{
    constructor() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.weight = 5;
    }

    set_color(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    set_pencil_weight(weight)
    {
        this.weight = weight;
    }

    stroke_pencil()
    {
        stroke(this.r, this.g, this.b);
        strokeWeight(this.weight);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}