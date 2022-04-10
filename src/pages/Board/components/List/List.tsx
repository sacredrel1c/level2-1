import React from 'react';
import { ICard } from '../../../../common/interfaces/ICard';
import './list.scss';

function List(props: { title: string; cards: ICard[] }) {
  const { title, cards } = props;
  return (
    <div className="list-container">
      <h2>
        <div className="list-title">{title}</div>
        <hr />
        {cards.map((card) => (
          <div className="list-content" key={card.id}>
            <div>{card.title}</div>
          </div>
        ))}
      </h2>
    </div>
  );
}
export default List;
