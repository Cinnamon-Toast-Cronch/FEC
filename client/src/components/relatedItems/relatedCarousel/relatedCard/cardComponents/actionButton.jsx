import React from 'react';

function Button({ handlesComparePopup }) {
  return (
    <div className="compare-button" onClick={handlesComparePopup}>&#9734;</div>
  );
}

export default Button;
