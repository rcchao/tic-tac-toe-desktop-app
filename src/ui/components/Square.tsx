import circle from "../assets/circle.png";
import cross from "../assets/cross.png";

interface SquareProps {
  value: string | null;
  handleClick?: () => void
}

function Square({ value, handleClick }: SquareProps) {
  let content;
  if (value === "X") {
    content = <img src={cross} className="token"/>
  } else if (value === "O") {
    content = <img src={circle} className="token"/>
  }

  return (
    <button className="square" onClick={handleClick}>
    {content}
    </button>
  )
}

export default Square;
