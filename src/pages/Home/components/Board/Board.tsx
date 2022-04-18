import React from 'react';
import './board.scss';

function Board(props: { title: string }) {
  const getRandomColor = Math.floor(Math.random() * 16777215).toString(16);
  const backgroundStyle = {
    backgroundColor: '#ffffff',
    backgroundImage: `repeating-linear-gradient(135deg,#${getRandomColor}, #${getRandomColor} 10%, transparent 10%, transparent 50%), repeating-linear-gradient(-135deg, #${getRandomColor}, #${getRandomColor} 10%, transparent 10%, transparent 50%)`,
    backgroundSize: '4px 4px',
  };
  const { title } = props;
  return (
    <div className="home-board-container" style={backgroundStyle}>
      <div className="board-title">{title}</div>
    </div>
  );
}
export default Board;
