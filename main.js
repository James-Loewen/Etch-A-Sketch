const divContainer = document.querySelector('.grid-container');
let width = 512;
let numSquaresPerSide = 30;

for (let i = 0; i < (numSquaresPerSide ** 2); i++) {
  let square = document.createElement('div');
  square.style.width = `${width / numSquaresPerSide}px`;
  square.style.height = `${width / numSquaresPerSide}px`;
  divContainer.appendChild(square);
}
