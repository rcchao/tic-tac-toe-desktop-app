import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Let's play tic tac toe!</h1>
      <button>
        <Link to="/game">Go to game</Link>
      </button>
    </div>
  );
}

export default Homepage;
