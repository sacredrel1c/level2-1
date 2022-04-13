import React from 'react';
import './board.scss';

function Board(props: { title: string }) {
  const { title } = props;
  return (
    <div className="home-board-container">
      <div className="board-title">Доска {title}</div>
    </div>
  );
}
export default Board;
