import { Link } from "react-router-dom";

function Gamepage() {
  return (
    <div>
      <h1>Game Page</h1>
      <button>
        <Link to="/win">Go to win screen</Link>
      </button>
    </div>
  );
}

export default Gamepage;