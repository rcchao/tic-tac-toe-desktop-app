import { BOARD_SIZE, TIE } from "../components/Board";

function declareOutcome(Squares: Array<string | null>) {
  const winningCombis = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Checking for a winner 
  for (let i = 0; i < winningCombis.length; i++) {
    const [a, b, c] = winningCombis[i];
    if (Squares[a] && Squares[a] === Squares[b] && Squares[a] === Squares[c]) {
      return Squares[a];
    }
  }

  // Checking for a tie 
  for (let k = 0; k < BOARD_SIZE * BOARD_SIZE; k++) {
    if (Squares[k] === null) {
      // At least one square is not filled
      return null
    }
  }

  return TIE;
}

export default declareOutcome