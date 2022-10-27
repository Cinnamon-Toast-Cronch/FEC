import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function ExpandImageModal({ children }) {
  useEffect(() => {
    const noScrollClass = 'no-scroll';

    document.body.classList.add(noScrollClass);

    return () => document.body.classList.remove(noScrollClass);
  }, []);

  const content = <div className="product-details-modal">{children}</div>;

  return ReactDOM.createPortal(content, document.body);
}

export default ExpandImageModal;
