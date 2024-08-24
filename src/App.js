import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
