import React from 'react';

function Comparison({ trigger, handlesComparePopup, data, displayProduct }) {
  return (
    trigger ?
    <div className="comparison-popup"> {data.name} + {displayProduct.name}
      <button onClick={handlesComparePopup}>X</button>
    </div> : null
  );
}

export default Comparison;
