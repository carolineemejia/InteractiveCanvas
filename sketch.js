let brushColor, brushType, bgColor,brushSize, previewBrush, curColor;
let brushSizeSlider;

function setup() {
  // put setup code here
  bgColor = 255;
  //brushSize = 80;
  brushType = "circle";
  
  brushColor = createColorPicker('#000000');
  brushColor.parent('tools');
  curColor = brushColor.color();

  brushSizeSlider = createSlider(10, 100, 20);
  brushSizeSlider.parent('tools');
  brushSizeSlider.style('width', '80px');
  brushSize = brushSizeSlider.value();

  var cnv = createCanvas(windowWidth - 100, windowHeight - 20);
  cnv.parent('sketch-container');
  background(bgColor);
}

function draw() {
  // put drawing code here
  curColor = brushColor.color();
  brushSize = brushSizeSlider.value();
  fill(curColor);
  noStroke();
  if(mouseIsPressed && clamp()) {
    if(brushType == "circle") {
      ellipse(mouseX, mouseY, brushSize);
    } else if (brushType == "spray") {
      spray()
    } else if (brushType == "square") {
      rect(mouseX-(brushSize/2), mouseY-(brushSize/2), brushSize);
    } else {
      fill(bgColor);
      rect(mouseX-(brushSize/2), mouseY-(brushSize/2), brushSize);
    }
    noCursor();
  } else {
    cursor();
  }
}

function spray() {
  //curColor.setAlpha(90);
  stroke(curColor);
  strokeWeight(2);
  for(let i = 0; i<brushSize*1.7; i++) {
    let x = random(-brushSize/2,brushSize/2);
    let y = random(-brushSize/2,brushSize/2);
    if(sqrt(x*x + y*y) <= (brushSize/2)) {
      point(mouseX+x, mouseY+y);
    }
  }
  //brushColor.setAlpha(100);
}

function clamp() {
  return mouseX > 0 && mouseX < windowWidth-100 && mouseY > 0 && mouseY < windowHeight-20;
}

function clear() {
  clear();
}

function circleBrush() {
  brushType = 'circle'
  document.getElementById("circle-btn").focus();
}

function squareBrush() {
  brushType = 'square'
}

function sprayBrush() {
  brushType = 'spray'
}

function eraserBrush() {
  brushType = 'erase'
}