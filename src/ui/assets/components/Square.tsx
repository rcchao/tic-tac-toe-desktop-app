// import React from 'react';

interface SquareProps {
  value: string;
  onHandleClick?: () => void
}

function Square({ value, onHandleClick }: SquareProps) {
  return (
    <button className="square" onClick={onHandleClick}>
    {value}
    </button>
  )
}

const renderSquare = (index: number) => {
  return <Square key={index} value={"X"} />
}

export default renderSquare;
