//this project will not be responsive
// I need to double check my math and how I get this because it is only looking at gridWidth
//right now which could be an issue
// rgb white (255, 255, 255) rgb black (0, 0, 0) or I could use opacity and increment it
//add button clicks for Large grid 6400, medium 1600, small 400


let numberCells = 400;
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
  }
  //newCells.addEventListener("mouseover", greyScaleCells());

}

createGrid();
