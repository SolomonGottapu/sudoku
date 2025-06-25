const grid = document.getElementById("sudoku-grid");
for (let i = 0; i < 81; i++) {
  const input = document.createElement("input");
  input.type = "number";
  input.min = 1;
  input.max = 9;
  input.classList.add("cell");
  grid.appendChild(input);
}

function clearGrid() {
  document.querySelectorAll(".cell").forEach(cell => cell.value = "");
}

function getGrid() {
  const cells = document.querySelectorAll(".cell");
  const grid = [];
  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      const val = parseInt(cells[i * 9 + j].value);
      row.push(isNaN(val) ? 0 : val);
    }
    grid.push(row);
  }
  return grid;
}

function setGrid(gridData) {
  const cells = document.querySelectorAll(".cell");
  for (let i = 0; i < 81; i++) {
    const val = gridData[Math.floor(i / 9)][i % 9];
    cells[i].value = val === 0 ? '' : val;
  }
}

function isSafe(board, row, col, num) {
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num || board[x][col] === num ||
        board[3 * Math.floor(row / 3) + Math.floor(x / 3)]
              [3 * Math.floor(col / 3) + x % 3] === num)
      return false;
  }
  return true;
}

function solveSudokuHelper(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudokuHelper(board)) return true;
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function solveSudoku() {
  const board = getGrid();
  if (solveSudokuHelper(board)) {
    setGrid(board);
    alert("Solved!");
  } else {
    alert("No solution exists.");
  }
}
