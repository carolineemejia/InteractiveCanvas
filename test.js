var brushColor;
let slider;
let strokeType //= ROUND;

function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(4);
    background(255)
    brushColor = color(50);
    slider = createSlider(20, 200, 80);
    slider.position(60, 0);
    slider.style('width', '80px');
    strokeType = ROUND;

}

function draw() {
    if (mouseIsPressed) {
        // if (mouseX <= 0) {
        //     if (mouseY <= 0) {
        //         brushColor = color(0, 0, 255);
        //     } else if (mouseY <= 100) {
        //         brushColor = color(66, 244, 194);
        //     } else if (mouseY <= 150) {
        //         brushColor = color(255, 0, 199);
        //     } else if (mouseY <= 200) {
        //         brushColor = color(249, 99, 0);
        //     } else if (mouseY <= 250) {
        //         strokeType = PROJECT;
        //     } else if (mouseY <= 300) {
        //         strokeType = ROUND;
        //     }
        // }
        strokeCap(strokeType)
        push();
        strokeWeight(slider.value())
        stroke(brushColor)
        line(mouseX, mouseY, pmouseX, pmouseY);
        pop();
    }

    //noStroke();
    //start coding for your color squares here!
    stroke(color(0));
    fill(0, 0, 255);
    rect(0, 0, 50, 50);
    fill(66, 244, 194);
    rect(0, 50, 50, 50);
    fill(255, 0, 199);
    rect(0, 100, 50, 50);
    fill(249, 99, 0);
    rect(0, 150, 50, 50)

    fill(255);
    rect(0, 200, 50, 50)
    fill(brushColor);
    rect(12.5, 212.5, 25, 25)
    fill(255);
    rect(0, 250, 50, 50)
    fill(brushColor);
    ellipse(25, 275, 25, 25)
    print(brushColor);

}