import React from 'react';

function Button({ handlesComparePopup }) {
  return (
    <div>
      <button onClick={() => handlesComparePopup()}>Button</button>
    </div>
  )
}

export default Button;
