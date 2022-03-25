const divContainer = document.querySelector('.grid-container');
const width = 512;
let numSquaresPerSide;
let color;

function setWidth() {
  numSquaresPerSide = parseInt(document.querySelector('#num-pixels').value)
  if (numSquaresPerSide < 1) {
    numSquaresPerSide = 1;
  } else if (numSquaresPerSide > 64) {
    numSquaresPerSide = 64;
  }
  console.log(numSquaresPerSide);
}

function populateBoard(e) {
  if (!divContainer.firstChild) {
    setWidth();
    for (let i = 0; i < (numSquaresPerSide ** 2); i++) {
      let square = document.createElement('div');
      square.style.width = `${e.target.boardWidth / numSquaresPerSide}px`;
      square.style.height = `${e.target.boardWidth / numSquaresPerSide}px`;
      square.addEventListener('mouseenter', draw);
      divContainer.appendChild(square);
    }
  }
}

function eraseBoard() {
  while (divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
  }
}

function draw(e) {
  color = document.querySelector('#draw-color').value;
  e.target.style.backgroundColor = color;
}

const startBtn = document.querySelector('#start');
startBtn.boardWidth = width;
startBtn.addEventListener('click', populateBoard);

const eraseBtn = document.querySelector('#erase');
eraseBtn.addEventListener('click', eraseBoard);
