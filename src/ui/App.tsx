import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Gamepage from "./pages/Gamepage";
import Endpage from "./pages/Endpage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/game" element={<Gamepage />} />
          <Route path="/end" element={<Endpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
