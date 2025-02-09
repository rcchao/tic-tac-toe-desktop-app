import { Link } from "react-router-dom";
import Board from "../components/Board";

function Gamepage() {
  return (
    <div>
      <Board />
      <button>
        <Link to="/end">Go to win screen</Link>
      </button>
    </div>
  );
}

export default Gamepage;
