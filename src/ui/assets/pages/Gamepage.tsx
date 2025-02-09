import { Link } from "react-router-dom";
import Board from "../components/Board";

// function handleSquareClick() {
//     console.log("hiii")
// }

function Gamepage() {
  return (
    <div>
      <Board />
      <button>
        <Link to="/win">Go to win screen</Link>
      </button>
    </div>
  );
}

export default Gamepage;
