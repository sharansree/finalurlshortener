import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import GoLink from "./GoLink"

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/l/:code" element={<GoLink />} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
