let x = 0;
let y = 0;
counter = 0;

function setup() {
    createCanvas(800, 800);
    background(0);
}


function draw() {
    for (let i = 0; i < 100; i++) {
        pickNextPoint();
        drawPoint();
        counter++;
    }
    noStroke()
    fill(0,0,0);
    rect(0,height-40,300,40);
    fill(255);
    textSize(32);
    text("Points: " + counter, 10, height - 10)
}

function drawPoint() {
    fill(255);
    stroke(255);
    strokeWeight(0.1);
    mx = map(x, -2.1820, 2.6558, 0, width);
    my = map(y, 0, 9.9983, height, 0);
    point(mx, my);
}

function pickNextPoint() {
    let nextX;
    let nextY;

    let value = random(1);

    if (value < 0.01) {
        nextX = 0
        nextY = 0.16 * y;
    } else if (value < 0.86) {
        nextX = 0.85 * x + 0.04 * y;
        nextY = -0.04 * x + 0.85 * y + 1.6;
    } else if (value < 0.93) {
        nextX = 0.20 * x + -0.26 * y;
        nextY = 0.23 * x + 0.22 * y + 1.6;
    } else {
        nextX = -0.15 * x + 0.28 * y;
        nextY = 0.26 * x + 0.24 * y + 0.44;
    }
    x = nextX;
    y = nextY;
}