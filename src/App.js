import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from "./components/Start";
import Play from "./components/Play";
import Congratulation from "./components/Congratulation";
import { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(0)
  const [round, setRound] = useState(0)
  return (
  <Router>
    <Routes>
          <Route path="/" element={<Start number={number} setNumber={setNumber} round={round} setRound={setRound}/>} />
          <Route path="play" element={<Play number={number} setNumber={setNumber} round={round} setRound={setRound}/>} />
          <Route path="congratulation" element={<Congratulation number={number} setNumber={setNumber} round={round} setRound={setRound}/>} />
    </Routes>
  </Router>
  );
}
