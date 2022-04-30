import React from 'react';
import './createboard.scss';

function CreateBoard(visible: boolean) {
  let ola = 0;
  if (visible) {
    ola++;
  }
  return (
    <div className="modal">
      <div className="modal-container">{ola}</div>
    </div>
  );
}
export default CreateBoard;
