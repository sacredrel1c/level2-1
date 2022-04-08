import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Board from './pages/Board/Board';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
              </a>
            </header>
          }
        />
        <Route path="board" element={<Board />} />
      </Routes>
    </div>
  );
}
export default App;
