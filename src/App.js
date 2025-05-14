// import Navigation from "./problem-pages/Navigation";
import Accordion from "./problem-pages/Accordion";
import Counter from "./problem-pages/Counter";
import Home from "./problem-pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProgressBars from "./problem-pages/ProgressBars";

function App() {
  // return <Counter />;
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/progress-bars" element={<ProgressBars />} />
      </Routes>
    </Router>
  );
}

export default App;
