import { Link } from "react-router-dom";

function Winpage() {
  return (
    <div>
      <h1>[Insert name] wins!</h1>
      <button>
        <Link to="/">Play again?</Link>
      </button>
    </div>
  );
}

export default Winpage;
