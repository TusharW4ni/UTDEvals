import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from "./components/Results.jsx";
import Home from "./Home.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}
