var canvasWidth = 720;
var canvasHeight = 400;
var squareSize = 15;
var offset = 10;
var margin = 40;
var palette = [
  [85, 98, 112],
  [199, 244, 100],
  [255, 107, 107]
];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(50);
  drawSquares();  
}

function draw() {
  // background(100);
}

function drawSquares() {
  var i = 0;
  var j = 0;
  while (i * margin + offset < canvasHeight) {
    while (j * margin + offset < canvasWidth) {
      var randomColour = palette[random([0, 1, 2])];
      stroke(...randomColour);
      fill(...randomColour);
      rect(j * margin + offset, i * margin + offset, squareSize, squareSize);
      j++;
    }
    i++;
    j = 0;
  }
}

function mousePressed() {
  drawSquares();
}
