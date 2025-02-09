import { Link } from "react-router-dom";
import { TIE } from "../components/Board";

interface GamepageProps {
  outcome: string | null;
}

function Endpage({outcome}: GamepageProps) {
  return (
    <div>
      {outcome !== TIE ? <h2> Player {outcome} wins!</h2> : <h2>It's a {outcome}!</h2>}
      <button>
        <Link to="/">Play again?</Link>
      </button>
    </div>
  );
}

export default Endpage;
