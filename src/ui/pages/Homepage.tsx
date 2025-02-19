import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="page-container">
      <div className="game-border">
        <h2>
          Let's play <br />
          tic tac toe!
        </h2>
        <button className="play-button">
          <Link to="/game" className="play-link">Play</Link>
        </button>
      </div>
    </div>
  );
}

export default Homepage;