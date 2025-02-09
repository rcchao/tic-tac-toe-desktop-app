interface SquareProps {
  value: string | null;
  handleClick?: () => void
}

function Square({ value, handleClick }: SquareProps) {
  return (
    <button className="square" onClick={handleClick}>
    {value}
    </button>
  )
}

export default Square;
