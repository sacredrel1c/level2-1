import React from 'react';
import List from './components/List/List';
import './components/Board/board.scss';

const state = {
  title: 'Моя тестовая доска',
  lists: [
    {
      id: 1,
      title: 'Планы',
      cards: [
        { id: 1, title: 'помыть кота' },
        { id: 2, title: 'приготовить суп' },
        { id: 3, title: 'сходить в магазин' },
      ],
    },
    {
      id: 2,
      title: 'В процессе',
      cards: [{ id: 4, title: 'посмотреть сериал' }],
    },
    {
      id: 3,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' },
      ],
    },
  ],
};

function Board() {
  const lists = state.lists.map((list) => <List title={list.title} cards={list.cards} key={list.id} />);
  return (
    <div>
      <h1>{state.title}</h1>
      <div className="board-container">
        <div className="board-container-row">
          {lists}
          <button>Добавить список</button>
        </div>
      </div>
    </div>
  );
}
export default Board;
