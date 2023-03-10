let brushColor, brushType, bgColor, brushSize;
let brushSizeSlider;
let clearBtn, sprayBtn, circleBtn, squareBtn;

function setup() {
  //Setup code here
  bgColor = 255;
  brushType = "spray";

  //Brush Color
  brushColor = createColorPicker('#000000');
  brushColor.position(windowWidth - 620, 5);

  //Brush Size
  brushSizeSlider = createSlider(20, 200, 80);
  brushSizeSlider.position(windowWidth - 550, 5);
  brushSizeSlider.style('width', '80px');
  brushSize = brushSizeSlider.value();


  //Clearing the canvas
  clearBtn = createButton("Clear Canvas");
  clearBtn.position(windowWidth - 440, 5);
  clearBtn.size(100, 30);
  clearBtn.style('font-family', 'Georgia');
  clearBtn.style('background-color', 'white');
  clearBtn.mousePressed(clearCanvas);

  // Adding spray brush button
  sprayBtn = createImg('assets/spray_icon.png');
  sprayBtn.position(windowWidth - 310, 5);;
  sprayBtn.size(50, 50);
  sprayBtn.style('background-color', 'white');
  sprayBtn.mousePressed(setSpray);

  //Adding circle brush button
  circleBtn = createImg('assets/marker_icon.png');
  circleBtn.position(windowWidth - 230, 5);
  circleBtn.size(50, 50);
  circleBtn.style('background-color', 'white');
  circleBtn.mousePressed(setCircle);

  //Adding square brush button
  squareBtn = createImg('assets/stamp_icon.png');
  squareBtn.position(windowWidth - 150, 5);
  squareBtn.size(50, 50);
  squareBtn.style('background-color', 'white');
  squareBtn.mousePressed(setSquare);

  //Set the canvas
  var cnv = createCanvas(windowWidth - 100, windowHeight - 20);
  cnv.position(0, 0);
  background(bgColor);

  fill('#191919')
  noStroke();
  rect(0, 0, windowWidth - 100, 60);
  rect(0, 0, 100, windowHeight - 20);


  textSize(22);
  textFont('Georgia');
  fill(255);
  text('Interactive Canvas', 100, 5, 120, 60);

}

function draw() {
  // put drawing code here

  brushSize = brushSizeSlider.value();
  noStroke();
  if (mouseIsPressed && mouseX > 100 && mouseY > 40) {
    if (brushType == "circle") {
      fill(brushColor.color());
      ellipse(mouseX, mouseY, brushSize, brushSize);
    } else if (brushType == "spray") {
      fill(brushColor.color());
      spray(mouseX, mouseY, brushSize, brushSize)
    } else if (brushType == "square") {
      fill(brushColor.color());
      rect(mouseX, mouseY, brushSize, brushSize);
    }


    fill('#191919')
    noStroke();
    rect(0, 0, windowWidth, 60);
    rect(0, 0, 100, windowHeight);

    textSize(22);
    textFont('Georgia');
    fill(255);
    text('Interactive Canvas', 100, 5, 120, 60);

    noCursor();
  } else {
    cursor();
  }
}

function spray() {
  //brushColor.setAlpha(20);
  stroke(brushColor.color(), 20);
  strokeWeight(2);
  for (let i = 0; i < brushSize * 1.5; i++) {
    let x = random(-brushSize / 2, brushSize / 2);
    let y = random(-brushSize / 2, brushSize / 2);
    if (sqrt(x * x + y * y) <= (brushSize / 2) && mouseX + x > 100 && mouseY + y > 40) {
      point(mouseX + x, mouseY + y);
    }
  }
  //brushColor.setAlpha(100);
}

function clearCanvas() {
  background(255);

  //Prevents rectangles from dissapearing
  fill('#191919')
  noStroke();
  rect(0, 0, windowWidth, 60);
  rect(0, 0, 100, windowHeight);

  //Prevents title from dissapearing
  textSize(22);
  textFont('Georgia');
  fill(255);
  text('Interactive Canvas', 100, 5, 120, 60);
}

function setSpray() {
  brushType = 'spray';
}

function setCircle() {
  brushType = 'circle';
}

function setSquare() {
  brushType = 'square';
}


