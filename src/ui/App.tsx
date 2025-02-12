import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import Gamepage from "./pages/Gamepage";
import Endpage from "./pages/Endpage";
import "./App.css";
import "./index.css";
import TitleBar from "./components/TitleBar"

function App() {
  const [outcome, setOutcome] = useState<string | null>(null);
  const location = useLocation();

  function handleOutcomeChange(outcome: string | null) {
    setOutcome(outcome);
  }

  // Reset outcome when game restarts
  useEffect(() => {
    if (location.pathname === "/") {
      setOutcome(null);
    }
  }, [location]);

  return (
    <div>
      <TitleBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/game"
          element={
            <Gamepage onOutcomeChange={handleOutcomeChange} outcome={outcome} />
          }
        />
        <Route path="/end" element={<Endpage outcome={outcome} />} />
      </Routes>
    </div>
  );
}

export default App;
