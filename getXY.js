
let points = [];
let dragImage_1;
let dragImage = [];

function preload() {
  drageImage_1 = loadImage("images/constellation/dragImage_1.png")
  for (let i = 1; i <= 5; i++) {
    dragImage[i] = [];   // 각 그룹 초기화

    for (let j = 1; j <= 2; j++) {
      dragImage[i][j] = loadImage(
        `images/constellation/dragImage_${i}_${j}.png`
      );
    }
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  img = dragImage[5][1];
}

function draw() {
  background(30);

  let originalW = img.width;
  let originalH = img.height;

  let scaledW = width * 0.5;
  let scaledH = originalH * (scaledW / originalW);

  let cx = width / 2;
  let cy = height / 2;

  image(img, cx, cy, scaledW, scaledH);

  noStroke();
  fill(255, 0, 0);
  for (let p of points) {
    let px = cx - scaledW / 2 + scaledW * p.rx;
    let py = cy - scaledH / 2 + scaledH * p.ry;
    circle(px, py, 8);
  }
}

function mousePressed() {
  let originalW = img.width;
  let originalH = img.height;

  let scaledW = width * 0.5;
  let scaledH = originalH * (scaledW / originalW);

  let cx = width / 2;
  let cy = height / 2;

  let left   = cx - scaledW / 2;
  let top    = cy - scaledH / 2;
  let right  = left + scaledW;
  let bottom = top + scaledH;

  if (mouseX >= left && mouseX <= right &&
      mouseY >= top && mouseY <= bottom) {

    let rx = (mouseX - left) / scaledW;   // 0~1
    let ry = (mouseY - top) / scaledH;    // 0~1

    points.push({ rx, ry });

    console.log(`{ rx: ${rx.toFixed(3)}, ry: ${ry.toFixed(3)} },`);
  }
}