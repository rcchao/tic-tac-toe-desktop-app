import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Board from "../components/Board";

function Gamepage() {
  const [outcome, setOutcome] = useState<string|null>(null)
  const navigate = useNavigate();

  function handleOutcomeChange(outcome: string|null) {
    setOutcome(outcome);
  };

  useEffect(() => {
    if (outcome) {
      navigate('/end');
    }
  }, [outcome, navigate])

  return (
    <div>
      <Board onOutcomeChange={handleOutcomeChange}/>
    </div>
  );
}

export default Gamepage;
