
# 🔢 Sudoku Solver (Python)

This is a Python-based **Sudoku Solver** that uses the **backtracking algorithm** to solve any valid 9×9 Sudoku puzzle. The program fills in all the empty cells (represented by `0`) by checking the constraints of rows, columns, and 3×3 subgrids.

---

## 📌 Features

- ✅ Solves any valid 9×9 Sudoku grid
- 🔁 Uses recursive **backtracking algorithm**
- 💡 Efficient and easy to understand logic
- 🧩 Accepts input directly in Python as a 2D list
- 🖨️ Prints the solved Sudoku in a clean format

---

## 🧠 Algorithm Used

This project implements a **backtracking algorithm**, a depth-first search strategy that:
1. Tries placing digits (1–9) in empty cells
2. Checks for row, column, and subgrid validity
3. Backtracks if a digit violates Sudoku rules
4. Continues recursively until the puzzle is solved

---

## 🧾 Sample Input

```python
board = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0]
]
✅ Sample Output
[4, 3, 5, 2, 6, 9, 7, 8, 1]
[6, 8, 2, 5, 7, 1, 4, 9, 3]
[1, 9, 7, 8, 3, 4, 5, 6, 2]
[8, 2, 6, 1, 9, 5, 3, 4, 7]
[3, 7, 4, 6, 8, 2, 9, 1, 5]
[9, 5, 1, 7, 4, 3, 6, 2, 8]
[5, 1, 9, 3, 2, 6, 8, 7, 4]
[2, 4, 8, 9, 5, 7, 1, 3, 6]
[7, 6, 3, 4, 1, 8, 2, 5, 9]

🔗 Live Project
Demo: https://solomongottapu.github.io/sudoku/  
GitHub: https://github.com/SolomonGottapu/sudoku
