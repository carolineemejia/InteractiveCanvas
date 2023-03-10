let brushColor, brushSize, brushType, bgColor;
let brushColorBtn, brushSizeBtn, brushTypeBtn, bgColorBtn;

function setup() {
  // put setup code here
  bgColor = 255;
  //brushColor = 0;
  brushSize = 80;
  brushType = "spray";
  var cnv = createCanvas(1000, 700);
  cnv.position(100,25);
  background(bgColor);
  brushColor = createColorPicker('#000000');
  brushColor.position(0,0);
}

function draw() {
  // put drawing code here
  fill(brushColor.color());
  if(mouseIsPressed) {
    if(brushType == "circle") {
      ellipse(mouseX, mouseY, brushSize, brushSize);
    } else if (brushType == "spray") {
      spray(mouseX, mouseY, brushSize, brushSize)
    } else{
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
  stroke(brushColor.color(),80);
  strokeWeight(2);
  for(let i = 0; i<brushSize*1.5; i++) {
    let x = random(-brushSize/2,brushSize/2);
    let y = random(-brushSize/2,brushSize/2);
    if(sqrt(x*x + y*y) <= (brushSize/2)) {
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
