import Home from "./PortfolioContainer/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./PortfolioContainer/Projects/Projects";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
