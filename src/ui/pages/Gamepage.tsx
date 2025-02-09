import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Board from "../components/Board";

interface GamepageProps {
  onOutcomeChange: (outcome: string | null) => void;
  outcome: string | null;
}

function Gamepage({onOutcomeChange, outcome}: GamepageProps) {
  const navigate = useNavigate();

  // Navigate to end screen if game ends
  useEffect(() => {
    if (outcome) {
      navigate('/end');
    }
  }, [outcome, navigate])

  return (
    <div>
      <Board onOutcomeChange={onOutcomeChange}/>
    </div>
  );
}

export default Gamepage;
