import { Link } from "react-router-dom";
import { TIE } from "../components/Board";

interface GamepageProps {
  outcome: string | null;
}

function Endpage({outcome}: GamepageProps) {
  return (
    <div>
      {outcome !== TIE ? <h1>{outcome} wins!</h1> : <h1>It's a {outcome}!</h1>}
      <button>
        <Link to="/">Play again?</Link>
      </button>
    </div>
  );
}

export default Endpage;
