import renderSquare from "./Square";

function Board() {
  const renderRow = (rowNumber: number) => {
    return (
      <div key={rowNumber} className="board-row">
        {Array.from({ length: 3 }, (_, colIndex) =>
          renderSquare(rowNumber * 3 + colIndex)
        )}
      </div>
    );
  };

  return (
    <div>
        {Array.from({ length: 3 }, (_, rowIndex) => renderRow(rowIndex))}
    </div>
  );
}

export default Board;
