//this project will not be responsive
// I need to double check my math and how I get this because it is only looking at gridWidth
//right now which could be an issue
// rgb white (255, 255, 255) rgb black (0, 0, 0) or I could use opacity and increment it
//add button clicks for Large grid 6400, medium 1600, small 400


let numberCells = 6400;
let gridWidth = document.getElementById('gridBox').clientWidth;
let gridArea = (gridWidth ** 2);
let cellArea = (gridArea / numberCells);
let cellSize = Math.sqrt(cellArea);
let cells;
let grid = [];


function createGrid() {
  for(let y = 0; y < numberCells; y++) {
    cells = document.createElement('div');
    //style cells section
    cells.className = 'cells';
    cells.style.width = cellSize + 'px';
    cells.style.height = cellSize + 'px';
    gridBox.appendChild(cells);
    cells.addEventListener("mouseover", colorCells);
  }
}
createGrid();
// the this statement is important because without it we are saying that the last
// div created will own the function on any mouseover, however the this makes the
// object that is being moused over own the function.

function removeGrid() {
  cells = document.getElementsByClassName('cells');
  for ()
  //I will need to create a function that will remove the last div with a loop then
  //rebuild it with the new variable.
  //the removal function should be done with a for loop
  //for(i=0; i > cells.length; i--) or something like this
  //cells = getElementsByClassName(cells)
}

function colorCells() {
  this.style.backgroundColor = 'black';
}

function selectGridSize() {
  largeButton.addEventListener('click', () => gridSize('large'));
}


function gridSize(userSelection) {
  switch (userSelection) {
    case 'large':
      numberCells = 400;
      removeGrid();
      createGrid();
      break;
    default:
      alert('something is broke');
      break;
  }
}

selectGridSize();
