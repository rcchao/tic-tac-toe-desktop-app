import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h2>Let's play <br/>tic tac toe!</h2>
      <button className="play-button">
        <Link to="/game">Play</Link>
      </button>
    </div>
  );
}

export default Homepage;
