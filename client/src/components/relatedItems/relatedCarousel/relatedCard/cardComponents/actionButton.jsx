import React from 'react';

function Button({ handlesComparePopup }) {
  return (
    <button className="compare-button" type="button" onClick={handlesComparePopup}>button</button>
  );
}

export default Button;
