//this project will not be responsive
// I need to double check my math and how I get this because it is only looking at gridWidth
// rgb white (255, 255, 255) rgb black (0, 0, 0) or I could use opacity and increment it


let numberCells;
let cells;
let cellsArray;
let grid = [];


function createGrid(numberCells) {
  let gridWidth = document.getElementById('gridBox').clientWidth;
  let gridArea = (gridWidth ** 2);
  let cellArea = (gridArea / numberCells);
  let cellSize = Math.sqrt(cellArea);
  for(let y = 0; y < numberCells; y++) {
    cells = document.createElement('div');
    //style cells section
    cells.className = 'cellsClass';
    cells.style.width = cellSize + 'px';
    cells.style.height = cellSize + 'px';
    gridBox.appendChild(cells);
    cells.addEventListener("mouseover", colorCells);
  }
}
// the this statement is important because without it we are saying that the last
// div created will own the function on any mouseover, however the this makes the
// object that is being moused over own the function.
// the + infront of the this statment returns the numeric expression of the object
//not the object itself

function removeGrid() {
  cellsArray = document.getElementsByClassName('cellsClass');
  for (i = cellsArray.length; (i = cellsArray.length) && (i >= 0); i--) {
    gridBox.removeChild(gridBox.firstChild);
  }
}


function colorCells() {
  let shade = +this.style.opacity;
  if (shade < 1) {
	  shade += 0.25;
  }
  this.style.opacity = shade;
}

function selectGridSize() {
  largeButton.addEventListener('click', ()=> gridSize('large'));
  mediumButton.addEventListener('click', ()=> gridSize('medium'));
  smallButton.addEventListener('click', ()=> gridSize('small'));
}



function gridSize(userSelection) {
  switch (userSelection) {
    case 'large':
	  removeGrid();
      createGrid(6400);
      break;
	case 'medium':
	  removeGrid();
	  createGrid(1600);
	  break;
	case 'small':
	  removeGrid();
	  createGrid(400);
	  break;
    default:
      alert('oops...something went wrong!');
      break;
  }
}

window.onload = gridSize('small');
selectGridSize();
createGrid();
