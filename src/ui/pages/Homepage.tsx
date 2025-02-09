import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h2>Let's play tic tac toe!</h2>
      <button>
        <Link to="/game">Go to game</Link>
      </button>
    </div>
  );
}

export default Homepage;
