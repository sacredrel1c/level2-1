import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import BoardWrapper from './pages/Board/BoardWrapper';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home boards={[]} />} />
        <Route path="board/:id" element={<BoardWrapper />} />
      </Routes>
    </div>
  );
}
export default App;
