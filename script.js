const svg = document.getElementById("svg");
svg.setAttribute("width", window.innerWidth);
svg.setAttribute("height", window.innerHeight);

const size_box1 = parseInt(prompt("Mass box1: "));
const size_box2 = parseInt(prompt("Mass box2: "));
let v_box1 = parseInt(prompt("Velocity box1: "));
let v_box2 = parseInt(prompt("Velocity box2: "));

let size1, size2;

if (size_box1 > size_box2) {
    size1 = 100;
    size2 = 50;
} else if (size_box1 < size_box2) {
    size1 = 50;
    size2 = 100;
} else {
    size1 = 100;
    size2 = 100;
}

const box1 = document.getElementById("square1");
box1.setAttribute("width", size1);
box1.setAttribute("height", size1);
box1.setAttribute("y", window.innerHeight / 2 - size1);

const box2 = document.getElementById("square2");
box2.setAttribute("width", size2);
box2.setAttribute("height", size2);
box2.setAttribute("y", window.innerHeight / 2 - size2);
box2.setAttribute("x", window.innerWidth - size2);

const txt = document.getElementById("txt");
let collision = 0;

let i = 0;
let j = window.innerWidth - size2;

const interval = setInterval(() => {
  box1.setAttribute("x", i);
  box2.setAttribute("x", j);

  i += v_box1;
  j -= v_box2;

  if (i + size1 >= j) {
    let temp_v1 = v_box1;
    let temp_v2 = v_box2;

    v_box1 =
      ((size_box1 - size_box2) * temp_v1 + 2 * size_box2 * -temp_v2) /
      (size_box1 + size_box2);

    v_box2 =
      ((size_box2 - size_box1) * temp_v2 + 2 * size_box1 * -temp_v1) /
      (size_box1 + size_box2);

    collision += 1;
  }

  if (i <= -1) {
    v_box1 = -v_box1;
    collision += 1;
  }

  if (j >= window.innerWidth - size2 + 1) {
    v_box2 = -v_box2;
    collision += 1;
  }

  txt.innerText = `Collision: ${collision}`;
}, 0); // 20 milliseconds delay between each update
