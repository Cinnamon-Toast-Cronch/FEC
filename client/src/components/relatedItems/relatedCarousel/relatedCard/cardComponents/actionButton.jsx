import React from 'react';

function Button({ handlesComparePopup }) {
  return (
    <div>
      <button className="compare-button" type="button" onClick={handlesComparePopup}>button</button>
    </div>
  );
}

export default Button;
