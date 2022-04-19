import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
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
  const boards = state.boards.map((board) => (
    <Link to={`/board/${board.id}`} key={board.id}>
      <Board title={board.title} />
    </Link>
  ));
  return (
    <div className="home-container">
      <h1>Мои доски</h1>
      <div className="boards-container">
        {boards}
        <a className="add-board">
          <FontAwesomeIcon icon={faAdd} />
          <span>Добавить доску</span>
        </a>
      </div>
    </div>
  );
}
export default Home;
