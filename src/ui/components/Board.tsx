import { useState } from "react"
import Square from "./Square";

const BOARD_SIZE = 3

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [XisNext, setXisNext]  = useState(true);

  const handleClick = (index: number) => {
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

  return (
    <div>
        {Array.from({ length: BOARD_SIZE }, (_, rowIndex) => renderRow(rowIndex))}
    </div>
  );
}

export default Board;
