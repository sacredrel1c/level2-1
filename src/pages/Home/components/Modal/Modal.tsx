import React from 'react';
import './modal.scss';

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: JSX.Element;
};

function Modal({ visible, setVisible, children }: Props) {
  return (
    <div
      className={visible ? 'modal active' : 'modal'}
      onClick={() => {
        setVisible(false);
      }}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
export default Modal;
