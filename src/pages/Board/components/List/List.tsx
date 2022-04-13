import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
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
      <div className="list-items-container">
        {cards.map((card) => (
          <div className="list-item" key={card.id}>
            <Card title={card.title} />
          </div>
        ))}
      </div>
      <a className="add-card">
        <FontAwesomeIcon icon={faAdd} />
        <span>Добавить карточку</span>
      </a>
    </div>
  );
}
export default List;
