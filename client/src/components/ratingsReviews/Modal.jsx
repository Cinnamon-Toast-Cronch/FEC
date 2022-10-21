import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  useEffect(() => {
    const noScrollClass = 'no-scroll';

    document.body.classList.add(noScrollClass);

    return () => document.body.classList.remove(noScrollClass);
  }, []);

  const content = (
    <div className="rnr-modal">
      <div>{children}</div>
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
}

export default Modal;
