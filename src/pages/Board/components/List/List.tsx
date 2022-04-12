import React from 'react';
import { ICard } from '../../../../common/interfaces/ICard';
import Card from '../Card/Card';
import './list.scss';

function List(props: { title: string; cards: ICard[] }) {
  const { title, cards } = props;
  return (
    <div className="list-container">
      <h2>
        <div className="list-title">{title}</div>
      </h2>
      {cards.map((card) => (
        <div className="list-content" key={card.id}>
          <Card title={card.title} />
        </div>
      ))}
      <a className="add-card">Добавить карточку</a>
    </div>
  );
}
export default List;
