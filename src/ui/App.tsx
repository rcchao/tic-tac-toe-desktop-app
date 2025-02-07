import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Gamepage from "./Gamepage";
import Winpage from "./Winpage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/game" element={<Gamepage />} />
        <Route path="/win" element={<Winpage />} />
      </Routes>
    </Router>
  );
}

export default App;