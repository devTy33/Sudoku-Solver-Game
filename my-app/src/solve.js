
export function rowCheck(arr, r) {
    let checker = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let c = 0; c < 9; c++) {
      if (arr[r * 9 + c] !== -1) {
        let n = arr[r * 9 + c];
        if (checker[n] !== 0) return false;
        checker[n] = 1;
      }
    }
    return true;
  }
  
  export function colCheck(arr, c) {
    let checker = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let r = 0; r < 9; r++) {
      if (arr[r * 9 + c] !== -1) {
        let n = arr[r * 9 + c];
        if (checker[n] !== 0) return false;
        checker[n] = 1;
      }
    }
    return true;
  }
  
  export function panelCheck(arr, pr, pc) {
    let checker = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let r = pr * 3 + i;
        let c = pc * 3 + j;
        if (arr[r * 9 + c] !== -1) {
          if (checker[arr[r * 9 + c]] !== 0) return false;
          checker[arr[r * 9 + c]] = 1;
        }
      }
    }
    return true;
  }
  
  export function solve(s_board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (s_board[i * 9 + j] === -1) {
          for (let num = 1; num <= 9; num++) {
            s_board[i * 9 + j] = num;
            if (
              rowCheck(s_board, i) &&
              colCheck(s_board, j) &&
              panelCheck(s_board, Math.floor(i / 3), Math.floor(j / 3))
            ) {
              const result = solve([...s_board]); // Recursively call solve and store the result
              if (result) {
                return result; // If result is not false, it means the board is solved, so return the result
              }
            }
            s_board[i * 9 + j] = -1;
          }
          return false; // If no valid solution found for this cell, backtrack
        }
      }
    }
    return s_board; // The board is solved
  }