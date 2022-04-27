import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home boards={[]} />} />
        <Route path="board/:id" element={<Board lists={[]} />} />
      </Routes>
    </div>
  );
}
export default App;
