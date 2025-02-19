import { Link } from "react-router-dom";
import { TIE } from "../components/Board";

interface GamepageProps {
  outcome: string | null;
}

function Endpage({ outcome }: GamepageProps) {
  return (
    <div className="page-container">
      <div className="game-border">
        {outcome !== TIE ? (
          <h2> Player {outcome} wins!</h2>
        ) : (
          <h2>It's a {outcome}!</h2>
        )}
        <button className="play-again-button">
          <Link to="/" className="play-again-link">
            Play again?
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Endpage;
