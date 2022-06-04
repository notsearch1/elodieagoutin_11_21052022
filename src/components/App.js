import { Routes, Route } from 'react-router-dom'
import '../styles/normalize.css'
import '../styles/index.css'
import Home from './Home'
import About from './About'
import Error from './Error'
import Lease from './Lease'




function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/lease/:id" element={<Lease />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      
    </div>
  );
}

export default App;
