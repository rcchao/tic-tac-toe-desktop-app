import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./assets/pages/Homepage";
import Gamepage from "./assets/pages/Gamepage";
import Winpage from "./assets/pages/Winpage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/game" element={<Gamepage />} />
          <Route path="/win" element={<Winpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
