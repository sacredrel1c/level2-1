import React from 'react';
import './card.scss';

function Card(props: { title: string }) {
  const { title } = props;
  return <div className="card">{title}</div>;
}
export default Card;
