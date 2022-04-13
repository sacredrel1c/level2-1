import React from 'react';
import Board from './components/Board/Board';
import './home.scss';

const state = {
  boards: [
    { id: 1, title: 'покупки' },
    { id: 2, title: 'подготовка к свадьбе' },
    { id: 3, title: 'разработка интернет-магазина' },
    { id: 4, title: 'курс по продвижению в соцсетях' },
  ],
};

function Home() {
  const boards = state.boards.map((board) => <Board title={board.title} key={board.id} />);
  return (
    <div className="home-container">
      <h1>Мои доски</h1>
      <div className="boards-container">{boards}</div>
    </div>
  );
}
export default Home;
