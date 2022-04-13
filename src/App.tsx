import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="board" element={<Board />} />
      </Routes>
    </div>
  );
}
export default App;
