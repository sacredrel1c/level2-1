import React from 'react';
import { ICard } from '../../../../common/interfaces/ICard';

function List(props: { title: string; cards: ICard[] }) {
  return (
    <h2>
      List is {props.title}
      <hr />
      {props.cards.map((card) => (
        <>
          <div>{card.id}</div>
          <div>{card.title}</div>
        </>
      ))}
    </h2>
  );
}
export default List;
