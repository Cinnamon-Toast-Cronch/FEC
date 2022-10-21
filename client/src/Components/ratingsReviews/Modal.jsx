import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  const content = (
    <div className="rnr-modal">
      <div>{children}</div>
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
}

export default Modal;
