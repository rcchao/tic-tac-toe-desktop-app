import { useState } from "react"
import Square from "./Square";
import declareOutcome from "../utils/declareOutcome.tsx";

export const BOARD_SIZE = 3

function Board() {
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));
  const [XisNext, setXisNext]  = useState<Boolean>(true);

  const handleClick = (index: number) => {
    // Return early if game is won/ space is already filled
    if (declareOutcome(squares) || squares[index]) {
      return
    }

    // Create a shallow copy of the squares & update board
    let newSquares = squares.slice()
    newSquares[index] = XisNext ? "X" : "O"
    setSquares(newSquares)

    // Update who the next player us
    setXisNext(!XisNext)
  }

  const renderSquare = (index: number) => {
    return <Square key={index} value={squares[index]} handleClick={() => handleClick(index)}/>
  }

  const renderRow = (rowNumber: number) => {
    return (
      <div key={rowNumber} className="board-row">
        {Array.from({ length: BOARD_SIZE }, (_, colIndex) =>
          renderSquare(rowNumber * BOARD_SIZE + colIndex)
        )}
      </div>
    );
  };

  const winner = declareOutcome(squares)
  let gameStatus
  if (winner) {
    gameStatus = "Winner: " + winner;
  } else {
    gameStatus = "Next player is: " + (XisNext ? "X" : "O")
  }

  return (
    <div>
        <div>{gameStatus}</div>
        {Array.from({ length: BOARD_SIZE }, (_, rowIndex) => renderRow(rowIndex))}
    </div>
  );
}

export default Board;
