import React from 'react';
import {ICard} from '../../../../common/interfaces/ICard';

function List({ title }: string, { cards }: ICard[]) {
  return (
    <h2>
      Hello list! {title} {cards}
    </h2>
  );
}
export default List;
