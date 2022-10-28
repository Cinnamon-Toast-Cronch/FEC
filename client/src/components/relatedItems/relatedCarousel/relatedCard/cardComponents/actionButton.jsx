import React from 'react';

function Button({ handlesComparePopup }) {
  return (
    <div className="compare-button"
      onClick={(e) => {
        e.stopPropagation();
        handlesComparePopup();
      }}
    >
      &#9734;
    </div>
  );
}

export default Button;
