var NUM_SINES = 5;
var sines = new Array(NUM_SINES);
var rad;

var fund = 0.01;
var ratio = 1;
var alpha = 50;

var trace = false;

function setup() {
  createCanvas(710, 400);
  rad = height / 4;
  background(204);

  for (var i = 0; i < sines.length; i++) {
    sines[i] = PI;
  }
}

function draw() {
  if (!trace) {
    background(204);
    stroke(0, 255);
    noFill();
  }

  push();
  translate(width / 2, height / 2);

  for (var i = 0; i < sines.length; i++) {
    var erad = 0;
    if (trace) {
      stroke(0, 0, 255 * (float(i) / sines.length), alpha);
      fill(0, 0, 255, alpha / 2);
      erad = 5 * (1 - float(i) / sines.length);
    }
    var radius = rad / (i + 1);
    rotate(sines[i]);
    if (!trace) { ellipse(0, 0, radius * 2, radius * 2); }
    push();
    translate(0, radius);
    if (!trace) { ellipse(0, 0, 5, 5); }
    if (trace) { ellipse(0, 0, erad, erad); }
    pop();
    translate(0, radius);
    sines[i] = sines[i]+(fund+(fund*i*ratio))%TWO_PI;
  }
  pop();
}

function keyReleased() {
  if (key === ' ') {
    trace = !trace;
    background(255);
  }
}
