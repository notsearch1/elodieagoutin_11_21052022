import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/normalize.css";
import "../styles/index.css";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import Lease from "./Lease";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/location/:id" element={<Lease />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
