let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetBtn = document.querySelector('#reset');
let modeBtns = document.querySelectorAll('.mode');

init();

function init() {
  // mode butttons even listeners
  setUpModeBtns();
  setUpSquares();
  reset();
}

function setUpModeBtns() {
  for (let i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener('click', function () {
      modeBtns[0].classList.remove('selected');
      modeBtns[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
      reset();

    });

  }
}

function setUpSquares() {
  for (let i = 0; i < squares.length; i++) {
    // Add click listeners to squares
    squares[i].addEventListener('click', function () {
      // Grab color of the clicked squares
      let clickedColor = this.style.backgroundColor;

      // Compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetBtn.textContent = 'Play Again';
      } else {
        this.style.backgroundColor = '#232323'; // fades square out
        messageDisplay.textContent = 'Try Again';
      }
    });
  }
}

function reset() {
  // Generate all new Colors
  colors = generateRandomColors(numSquares);

  // Pick a new random color from array
  pickedColor = pickColor();

  // Hide text in span
  messageDisplay.textContent = "";

  // Play again to New Colors
  resetBtn.textContent = 'New colors';

  // Change colorDisplay to match pickedColor
  colorDisplay.textContent = pickedColor;

  // Change colors of squares
  for (let i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }

  h1.style.backgroundColor = 'steelblue';
}

resetBtn.addEventListener('click', function () {
  reset();
});

function changeColors(color) {
  // loop through squares
  for (let i = 0; i < squares.length; i++) {
    // change each color to match given colors
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // Make an array
  let arr = [];

  // repeat num times
  for (let i = 0; i < num; i++) {
    // Get random color and push into arr
    arr.push(randomColor());
  }

  // return that array
  return arr;
}

function randomColor() {
  // pick a 'red' from 0-255
  let r = Math.floor(Math.random() * 256);

  // pick a 'red' from 0-255
  let g = Math.floor(Math.random() * 256);

  // pick a 'red' from 0-255
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
