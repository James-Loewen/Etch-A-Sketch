const divContainer = document.querySelector('.grid-container');
const width = 512;
// As of right now, I don't need an initial value for this, but that will change eventually
let numSquaresPerSide // = 40;

function setWidth() {
  numSquaresPerSide = window.prompt("What pixel size would please you, m'lord?");
  while (numSquaresPerSide > 64) {
    numSquaresPerSide = window.prompt("Please pick a number between 1 and 64, m'lord.");
  }
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
  e.target.style.backgroundColor = 'gray';
}

const startBtn = document.querySelector('#start');
startBtn.boardWidth = width;
startBtn.addEventListener('click', populateBoard);

const eraseBtn = document.querySelector('#erase');
eraseBtn.addEventListener('click', eraseBoard);
