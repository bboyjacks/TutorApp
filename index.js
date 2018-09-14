let pencil = null;
let eraser = null;

var using_pencil = true;

function setup() {
    createCanvas (windowWidth, windowHeight);
    pencil = new Pencil;
    eraser = new Eraser;

    // Pencil
    fill(0);
    rect(100, 100, 100, 100);

    // Eraser
    fill(100, 0, 0);
    rect(250, 100, 100, 100);
}

function draw() {
}

function mouseClicked()
{
    if (100 < mouseX && mouseX < 200 && 100 < mouseY && mouseY < 200)
    {
        using_pencil = true;
        console.log("using pencil");
    }

    else if (250 < mouseX && mouseX < 350 && 100 < mouseY && mouseY < 200)
    {
        using_pencil = false;
        console.log("using eraser");
    }
}

function mouseDragged() {
    if (using_pencil)
        pencil.stroke_pencil()
    else
        eraser.stroke_eraser()
}