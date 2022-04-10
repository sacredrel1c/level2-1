import React from 'react';
import { ICard } from '../../../../common/interfaces/ICard';

function List(props: { title: string; cards: ICard[] }) {
  const { title, cards } = props;
  return (
    <h2>
      {title}
      <hr />
      {cards.map((card) => (
        <>
          <div>{card.id}</div>
          <div>{card.title}</div>
        </>
      ))}
    </h2>
  );
}
export default List;
