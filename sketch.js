let brushColor, brushType, bgColor,brushSize, previewBrush;
let brushSizeSlider, brushTypeBtn, bgColorBtn;

function setup() {
  // put setup code here
  bgColor = 255;
  //brushSize = 80;
  brushType = "spray";
  
  brushColor = createColorPicker('#000000');
  brushColor.position(0,0);

  brushSizeSlider = createSlider(20, 200, 80);
  brushSizeSlider.position(50,0);
  brushSizeSlider.style('width', '80px');
  brushSize = brushSizeSlider.value();

  var cnv = createCanvas(1100, 740);
  cnv.position(0,0);
  background(bgColor);

  fill('#191919')
  noStroke();
  rect(0,0,1100, 40);
  rect(0,0,100,740)
}

function draw() {
  // put drawing code here
  brushSize = brushSizeSlider.value();
  fill(brushColor.color());
  if(mouseIsPressed && mouseX > 100 && mouseY > 40) {
    if(brushType == "circle") {
      ellipse(mouseX, mouseY, brushSize, brushSize);
    } else if (brushType == "spray") {
      spray(mouseX, mouseY, brushSize, brushSize)
    } else if (brushType == "square") {
      rect(mouseX, mouseY, brushSize, brushSize);
    }
    //ellipse(mouseX, mouseY, brushSize, brushSize);
    noCursor();
  } else {
    cursor();
  }
}

function spray() {
  //brushColor.setAlpha(20);
  stroke(brushColor.color(),20);
  strokeWeight(2);
  for(let i = 0; i<brushSize*1.5; i++) {
    let x = random(-brushSize/2,brushSize/2);
    let y = random(-brushSize/2,brushSize/2);
    if(sqrt(x*x + y*y) <= (brushSize/2) && mouseX+x > 100 && mouseY+y > 40) {
      point(mouseX+x, mouseY+y);
    }
  }
  //brushColor.setAlpha(100);
}

// function clear() {
//   background(bgColor);
// }

// function changeBrushColor() {

// }

// function changeBrushSize() {

// }

// function changeBrushType() {

// }
