let brushColor, brushType, bgColor,brushSize, previewBrush, curColor;
let brushSizeSlider, alphaSlider, curBtn, brushList, brushIndex;

function setup() {
  // put setup code here
  bgColor = 255;
  brushList = ['circle','square','spray','erase']
  brushIndex = 0;
  brushType = brushList[brushIndex];
  
  brushColor = createColorPicker('#000000');
  brushColor.parent('color-sel');
  curColor = brushColor.color();

  brushSizeSlider = createSlider(10, 100, 20);
  brushSizeSlider.parent('brush-size');
  brushSizeSlider.style('width', '80px');
  brushSize = brushSizeSlider.value();
  document.getElementById("size-text").innerHTML=brushSize;

  alphaSlider = createSlider(0,255, 255);
  alphaSlider.parent('alpha-slider');
  alphaSlider.style('width', '80px');
  alphaSize = alphaSlider.value();
  document.getElementById('alpha-text').innerHTML=round(alphaSize/255*100);

  var cnv = createCanvas(windowWidth - 100, windowHeight - 200);
  cnv.parent('sketch-container');
  background(bgColor);

  curBtn = document.getElementById("circle-btn");
  curColor.setAlpha(alphaSize);
}

function draw() {
  // put drawing code here
  cursor(CROSS);
  curColor = brushColor.color();
  alphaSize = alphaSlider.value();
  curColor.setAlpha(alphaSize);
  document.getElementById('alpha-text').innerHTML=round(alphaSize/255*100);

  brushSize = brushSizeSlider.value();
  document.getElementById("size-text").innerHTML=brushSize;
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
  }
}

function keyPressed() {
  switch(key) {
    case ',':
      brushIndex -= 1;
      if(brushIndex < 0) {
        brushIndex = 3;
      }
      break;
    case '.':
      brushIndex += 1;
      if(brushIndex > 3) {
        brushIndex = 0;
      }
      brushType = brushList[brushIndex];
      break;
  }
  switch(brushIndex) {
    case 0:
      circleBrush();
      break;
    case 1:
      squareBrush();
      break;
    case 2:
      sprayBrush();
      break;
    case 3:
      eraserBrush();
      break;
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
  return mouseX > 0 && mouseX < windowWidth-100 && mouseY > 0 && mouseY < windowHeight-200;
}

function clearCanvas() {
  clear();
  background(bgColor);
}

function circleBrush() {
  brushIndex = 0;
  brushType = brushList[brushIndex];
  var btn = document.getElementById("circle-btn");
  console.log(btn)
  curBtn.className = curBtn.className.replace(" active","");
  btn.className += " active"
  curBtn = document.getElementById("circle-btn");
}

function squareBrush() {
  brushIndex = 1;
  brushType = brushList[brushIndex];
  var btn = document.getElementById("square-btn");
  curBtn.className = curBtn.className.replace(" active","");
  btn.className += " active"
  curBtn = document.getElementById("square-btn");
}

function sprayBrush() {
  brushIndex = 2;
  brushType = brushList[brushIndex];
  var btn = document.getElementById("spray-btn");
  curBtn.className = curBtn.className.replace(" active","");
  btn.className += " active"
  curBtn = document.getElementById("spray-btn");
}

function eraserBrush() {
  brushIndex = 3;
  brushType = brushList[brushIndex];
  var btn = document.getElementById("eraser-btn");
  curBtn.className = curBtn.className.replace(" active","");
  btn.className += " active"
  curBtn = document.getElementById("eraser-btn");
}