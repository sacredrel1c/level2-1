import React from 'react';
import { useParams } from 'react-router-dom';
import Board from './Board';

function BoardWrapper() {
  const { id } = useParams();
  let boardId = 0;
  if (id) {
    boardId = Number.parseInt(id, 10);
  }
  return <Board lists={[]} id={boardId} />;
}
export default BoardWrapper;
