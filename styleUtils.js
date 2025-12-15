const BASE_WIDTH = 1440;
const BASE_HEIGHT = 900;

const rw = (v) => (v / BASE_WIDTH) * width;
const rh = (v) => (v / BASE_HEIGHT) * height;
const rmin = (v) => min(width, height) * v;

const space = (v) => rmin(v);

function autoTextHeight(str, maxWidth) {
  const words = str.split(" ");
  let line = "";
  let lines = 1;

  for (let word of words) {
    const test = line + word + " ";
    if (textWidth(test) > maxWidth) {
      line = word + " ";
      lines++;
    } else {
      line = test;
    }
  }

  return lines * (textAscent() + textDescent());
}

function Column({ x, y, align = "start", gap = 0 }) {
  let cursorY = 0;

  return {
    add(drawFn, h) {
      push();
      translate(x, y + cursorY);

      if (align === "center") translate(0, h / 2);
      if (align === "end") translate(0, h);

      drawFn();
      pop();

      cursorY += h + gap;
    },
  };
}

function Row({ x, y, align = "center", gap = 0 }) {
  let cursorX = 0;

  return {
    add(drawFn, w) {
      push();
      translate(x + cursorX, y);

      if (align === "center") translate(w / 2, 0);
      if (align === "end") translate(w, 0);

      drawFn();
      pop();

      cursorX += w + gap;
    },
  };
}

function anchor(pos, margin = space(0.04)) {
  switch (pos) {
    case "top-left":
      return { x: margin, y: margin };
    case "top-right":
      return { x: width - margin, y: margin };
    case "bottom-left":
      return { x: margin, y: height - margin };
    case "bottom-right":
      return { x: width - margin, y: height - margin };
    case "center":
      return { x: width / 2, y: height / 2 };
  }
}

function FlexColumn({ x, y, width, align = "start", gap = 0, debug = false }) {
  let cursorY = 0;

  return {
    add(drawFn, h, itemWidth = null) {
      let offsetX = 0;
      const w = itemWidth !== null ? itemWidth : width;

      if (align === "center") {
        offsetX = (width - w) / 2 + w / 2; // 요소 중앙이 컬럼 중앙에
      } else if (align === "end") {
        offsetX = width - w / 2; // 요소 중앙이 컬럼 오른쪽 끝에
      } else {
        // align === "start"일 때는 요소 중앙이 x + w/2 위치에
        offsetX = w / 2;
      }

      if (debug) {
        push();
        noFill();
        stroke(255, 0, 0);
        rect(x, y + cursorY, width, h);
        pop();
      }

      push();
      translate(x + offsetX, y + cursorY);
      drawFn();
      pop();

      cursorY += h + gap;
    },
  };
}

function FlexRow({ x, y, height, align = "center", gap = 0, debug = false }) {
  let cursorX = 0;

  return {
    add(drawFn, w) {
      let offsetY = 0;
      if (align === "center") offsetY = height / 2;
      if (align === "end") offsetY = height;

      if (debug) {
        push();
        noFill();
        stroke(0, 255, 0);
        rect(x + cursorX, y, w, height);
        pop();
      }

      push();
      translate(x + cursorX, y + offsetY);
      drawFn();
      pop();

      cursorX += w + gap;
    },
  };
}
